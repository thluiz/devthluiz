import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BackButton = ({ to, language }) => {
  const path = `/${language}${to}`
  return (
    <AniLink      
      to={path}
      cover
      direction="right"
      bg="var(--primary-color)"
      class="primary-color"
    >
      <button className="btn btn-info">&lt;</button>
    </AniLink>
  )
}
export default BackButton