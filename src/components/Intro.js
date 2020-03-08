import languageConfig from "../../locale/config"

import React from "react"

import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import mdxLogo from '../images/mdx.svg'

const Intro = ({ translate, data, language }) => (
  <intro>
    <div className="container my-4">
      <h2 className="card-title text-info font-weight-bold">
        {translate("site.title")}
      </h2>
      <p className="card-subtitle mt-2">{translate("site.description")}</p>
      <p className="card-subtitle text-muted mt-0 mb-0  "><small>{translate("site.description-tagline")}</small></p>
      <Link className="btn btn-info my-3" to={ languageConfig[language].aboutPage }>
        {translate("general.knowMore")}
      </Link>

      <hr />
      <h4>{translate("general.builtWith")}</h4>
      <a href="https://reactjs.org/">
        <img
          className="mr-4 mt-3"
          src="https://img.icons8.com/ios/40/00D8FF/react-native-filled.png"
          alt="build-with-icon-1"
        />
      </a>
      <a href="http://gatsbyjs.org/">
        <img
          className="mr-4 mt-3"
          width="40px"
          src="https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png"
          alt="build-with-icon-2"
        />
      </a>
      <a href="https://mdxjs.com">
        <img
          className="mr-4 mt-3"
          src={mdxLogo} 
          width="80px"
          alt="build-with-icon-4"
        />
      </a>
      <h6>
        <br />
        Open Sourced on{" "}
        <a
          class="primary-color"
          href={data.site.siteMetadata.githubUrl || "https://github.com"}
        >
          Github
        </a>
      </h6>
      {/* <hr />
            <h4>Latest Posts</h4>
            <ul class="list-group my-3">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul> */}
    </div>
  </intro>
)

export default props => (
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
    render={data => <Intro data={data} {...props} />}
  />
)
