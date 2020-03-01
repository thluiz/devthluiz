import React from "react"
import Card from "../components/Card"
import Page from "../components/PageLayout"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  return (
    <Page>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <div className="container">
        <div className="col">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card
              slug={node.frontmatter.slug}
              authorName={node.frontmatter.author}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              timeStamp={node.frontmatter.date}
            />
          ))}
        </div>
      </div>
    </Page>
  )
}

export const query = graphql`
  query BlogPostsList($locale: String = "pt") {
    allMarkdownRemark(
      filter: { frontmatter: { language: { eq: $locale } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            author
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

export default Blog
