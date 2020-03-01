import React from "react"
import Page from "../components/PageLayout"
import Helmet from "react-helmet"
import Link from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

const locales = require("../../locale/config")
const languages = Object.keys(locales).map(function (key) { return locales[key]; });
const default_language = languages.find(l => l.default).path;

export const query = graphql`
  query TagsPostsList($locale: String) {
    allMarkdownRemark(filter: { frontmatter: { language: { eq: $locale } } }) {
      edges {
        node {
          frontmatter {
            language
            tags
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Tags = ({ data, pageContext }) => {
  const allMarkdownRemark = data.allMarkdownRemark
  const site = data.site

  const siteMetadata = site.siteMetadata
  const posts = allMarkdownRemark.edges

  let TagArray = []

  function getTagArray() {
    posts.map(({ node }, index) => {
      var tag = node.frontmatter.tags
      tag.forEach(item => TagArray.push(item))
      return ""
    })
  }

  getTagArray()

  return (
    <Page>
      <Helmet>
        <title>Tags | {siteMetadata.title}</title>
      </Helmet>
      <div className="container">
        <h1 class="primary-color">Tags</h1>
        {Array.from(new Set(TagArray)).map((tagItem, index) => {
          return (
            <Link
              cover
              bg="var(--primary-color)"
              duration={0.5}
              to={`/${pageContext.locale || default_language}/tags/` + tagItem}
              className="btn mr-4 btn-info my-3"
            >
              #{tagItem}
            </Link>
          )
        })}
      </div>
    </Page>
  )
}

export default Tags
