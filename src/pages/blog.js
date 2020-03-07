import React from "react"
import Card from "../components/Card"
import Page from "../components/PageLayout"
import { Translate } from "../components/withI18n"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

const Blog = ({ t, data }) => {
  return (
    <Page>
      <Helmet>
        <title>
          {t("pages.blog.title")} | {t("site.title")}
        </title>
      </Helmet>
      <div className="container">
        <div className="col">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card
              slug={node.frontmatter.slug}
              authorName={node.frontmatter.author}
              authorUrl={node.frontmatter.authorUrl}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              timeStamp={node.frontmatter.date}
              translate={t}
            />
          ))}
        </div>
      </div>
    </Page>
  )
}

export const query = graphql`
  query BlogPostsList($language: String = "pt") {
    allMarkdownRemark(
      filter: {
        frontmatter: { hide: { ne: true }, language: { eq: $language } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "YYYY-MM-DD")
            author
            authorUrl
            description
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

export default Translate(Blog)
