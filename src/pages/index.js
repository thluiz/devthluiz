import React from "react"
import Helmet from "react-helmet"

import { graphql } from "gatsby"
import Link from "gatsby-plugin-transition-link/AniLink"

import Page from "../components/PageLayout"
import Card from "../components/Card"
import { Translate } from "../components/withI18n"
import Intro from "../components/Intro"
import getDefaultLanguage from "../getDefaultLanguage"

function Index({ t, data, pageContext }) {
  return (
    <Page>
      <Helmet>
        <title>
          {t("pages.home.title")} | {t("site.title")}
        </title>
      </Helmet>
      <div className="container abs">
        <div className="row">
          <div className="col-lg-4">
            <Intro
              translate={t}
              language={pageContext.language || getDefaultLanguage()}
            />
          </div>
          <div className="col-lg-8">
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
            <Link
              fade
              className="my-3 float-right btn text-info shadow-sm"
              to="blog"
              duration={0.5}
            >
              {t("general.viewAll")} →
            </Link>
          </div>
        </div>
      </div>
    </Page>
  )
}

export const query = graphql`
  query index($language: String = "pt") {
    allMarkdownRemark(
      filter: {
        frontmatter: { hide: { ne: true }, language: { eq: $language } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 4
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
  }
`

export default Translate(Index)
