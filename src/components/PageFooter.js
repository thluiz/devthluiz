import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Translate } from "./withI18n"

import useTheme from "../useTheme"

const Footer = ({ t, data }) => {
  const { theme } = useTheme()

  return (
    <footer className={"text-center pt-4 " + theme}>
      <h5>
        {t("site.footer.signature")}{" "}
        <a
          className="font-weight-bold text-info"
          href={data.site.siteMetadata.githubUrl}
        >
          {data.site.siteMetadata.author}
        </a>
      </h5>
      <h6>
        Copyright © "{t("site.title")}" | {new Date().getFullYear()}{" "}
      </h6>
      <br />
    </footer>
  )
}

export default Translate(props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            githubUrl
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
))
