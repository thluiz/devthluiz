import React from "react"
import { graphql } from "gatsby"

import Page from "../components/PageLayout"
import Card from "../components/Card"
import Link from "gatsby-plugin-transition-link/AniLink"
import Intro from "../components/Intro"
import Helmet from "react-helmet"


function index({ data, pageContext }) {
  return (
    <Page>
      <Helmet>
        <title>Home | The 404 Blog</title>
      </Helmet>
      <div className="container abs">
        <div className="row">
          <div className="col-lg-4">
            <Intro />
          </div>
          <div className="col-lg-8">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Card
                slug={node.frontmatter.slug}
                authorName={node.frontmatter.author}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                timeStamp={node.frontmatter.date}
              />
            ))}
            <Link
              fade
              className="my-3 float-right btn text-info shadow-sm"
              to="blog"
              duration={0.5}
            >
              View All →
            </Link>
          </div>
        </div>
      </div>
    </Page>
  )
}

export const query = graphql`
  query index($locale: String = "pt") {
    allMarkdownRemark(
      filter: { frontmatter: { language: { eq: $locale } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 4
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
  }
`

export default index
