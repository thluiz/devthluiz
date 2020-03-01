import React from 'react'
import Card from './Card'
import BackButton from './BackButton'
import { graphql } from 'gatsby';
import '../style.css'

const TagComponent = ({ pageContext, data }) => {

    const tag = pageContext.tag

    return (

        <div className="container">
            <BackButton to="/tags" />

            <h1 class="primary-color">#{tag}</h1>
            <div className="col">
                {
                    data.allMarkdownRemark.edges.map(
                        ({ node }, index) => {
                            return <Card
                                key={index}
                                slug={node.frontmatter.slug}
                                authorName={node.frontmatter.author}
                                title={node.frontmatter.title}
                                description={node.frontmatter.description}
                                timeStamp={node.frontmatter.date}
                            />
                        }
                    )
                }
            </div>
        </div>

    )
}

export default TagComponent

export const query = graphql`
    query($tag: String!){
        allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag}}}) {
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