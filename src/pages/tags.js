import React from "react"
import Helmet from "react-helmet"

import { graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link/AniLink"

import Page from "../components/PageLayout"
import getDefaultLanguage from "../getDefaultLanguage"

import Translate from "../components/withI18n"

export const query = graphql`
  query TagsPostsList($language: String) {
    allMarkdownRemark(
      filter: { frontmatter: { language: { eq: $language } } }
    ) {
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

const Tags = ({ t, data, pageContext }) => {
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
        <title>
          {t("pages.tags.title")} | {siteMetadata.title}
        </title>
      </Helmet>
      <div className="container">
        <h1 class="primary-color">{t("pages.tags.title")}</h1>
        {Array.from(new Set(TagArray)).map((tagItem, index) => {
          return (
            <Link
              cover
              bg="var(--primary-color)"
              duration={0.5}
              to={
                `/${pageContext.language || getDefaultLanguage()}/tags/` +
                tagItem
              }
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

export default Translate(Tags)
