import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import { Link } from 'gatsby';

const Intro = ({ data }) =>(
    <intro>
        <div className="container my-4">
            <h2 className="card-title text-info font-weight-bold">{data.site.siteMetadata.title}</h2>
            <p className="card-subtitle mt-2">{data.site.siteMetadata.description}</p>
            <Link className="btn btn-info my-3" to="about">Know More</Link>

            <hr />
            <h4>Built with</h4>
            <a href="https://reactjs.org/">
                <img
                    className="mr-4 mt-3"
                    src="https://img.icons8.com/ios/40/00D8FF/react-native-filled.png"
                    alt="build-with-icon-1" />
            </a>
            <a href="http://gatsbyjs.org/">
                <img
                    className="mr-4 mt-3"
                    width="40px"
                    src="https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png"
                    alt="build-with-icon-2" />
            </a>
            <a href="https://www.netlify.com/">
                <img
                    className="mr-4 mt-3"
                    width="40px"
                    src="https://www.netlify.com/img/press/logos/logomark.png"
                    alt="build-with-icon-3" />
            </a>
            <a href="https://www.markdownguide.org/">
                <img
                    className="mr-4 mt-3"
                    src="https://img.icons8.com/office/40/000000/markdown.png"
                    alt="build-with-icon-4" />
            </a>
            <h6><br />Open Sourced on <a class="primary-color" href={data.site.siteMetadata.githubUrl || 'https://github.com'}>Github</a></h6>
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
              title, description, author, githubUrl
            }
          }
        }
      `}
      render={data => <Intro data={data} {...props} />}
    />
  )