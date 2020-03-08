const config = require("./config")
const path = require(`path`)
const locales = require("./locale/config")

const languages = Object.keys(locales).map(function (key) { return locales[key]; });
const default_language = languages.find(l => l.default).path;

/* 
  Author : Mohan
  CreatedAt : 06-07-2019

  Updated At: 03/01/2020 ThLuiz - Add Internacionalization
*/

//this will create pages programatically
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          language: lang,
        },
      })
    })

    resolve()
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/components/BlogPostTemplate.js`)
  const tagComponent = path.resolve(`./src/components/TagComponent.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: frontmatter___language }
          filter: { frontmatter: { hide: { ne: true } } }
        ) {
          edges {
            next {
              frontmatter {
                slug
                title
              }
            }
            previous {
              frontmatter {
                slug
                title
              }
            }
            node {
              frontmatter {
                slug
                tags
                language
              }
            }
          }
        }
        hidePosts: allMarkdownRemark(
          sort: { fields: frontmatter___language }
          filter: { frontmatter: { hide: { eq: true } } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                tags
                language
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const next = post.next
      const previous = post.previous

      createPage({
        path: post.node.frontmatter.slug,
        title: post.node.frontmatter.title,
        component: blogPost,
        context: {
          slug: post.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })

    // Create blog posts that are internal references
    const internalPosts = result.data.hidePosts.edges
    
    internalPosts.forEach((post, index) => {
      console.log(post);

      createPage({
        path: post.node.frontmatter.slug,
        title: post.node.frontmatter.title,
        component: blogPost,
        context: {
          slug: post.node.frontmatter.slug,
        },
      })
    })

    var languageGroup = groupBy(posts, post => post.node.frontmatter.language)

    languageGroup.forEach((posts_for_language, language) => {
      let tagsGroup = groupBy(
        posts_for_language,
        post => post.node.frontmatter.tags
      )

      tagsGroup.forEach((_, tags) => {
        tags.forEach(tag => {
          createPage({
            path: `/${ language }/tags/` + tag,
            component: tagComponent,
            context: {
              language,
              tag,
            },
          })
        })
      })
    })

    return null
  })
}

function groupBy(list, keyGetter) {
  const map = new Map()
  list.forEach(item => {
    const key = keyGetter(item)
    const collection = map.get(key)
    if (!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  })
  return map
}
