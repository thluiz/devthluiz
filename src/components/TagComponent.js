import React from "react"
import Card from "./Card"
import { graphql } from "gatsby"

import "../style.css"

import BackButton from "./BackButton"
import { Translate } from "./withI18n"

const TagComponent = ({ pageContext, data, i18n }) => {
  const tag = pageContext.tag
  const language = pageContext.language

  return (
    <div className="container">
      <BackButton to="/tags" language={language} />

      <h1 class="primary-color"> #{tag}</h1>
      <div className="col">
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <Card
              key={index}
              slug={node.frontmatter.slug}
              authorName={node.frontmatter.author}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              timeStamp={node.frontmatter.date}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Translate(TagComponent)

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tag } } }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            description
            author
          }
        }
      }
    }
  }
`
