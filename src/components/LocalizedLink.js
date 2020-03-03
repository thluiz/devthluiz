import React from "react"

import Link from "gatsby-plugin-transition-link/AniLink"

const LocalizedLink = ({ to, language, children, ...props }) => {
  const path = `/${language}${to}`

  return (
    <Link
      {...props}
      to={path}
      class="primary-color-1"
      style={{
        fontSize: "24px",
        fontWeight: "600",
      }}
      fade
      duration={1}
    >
      {children}
    </Link>
  )
}

export default LocalizedLink
