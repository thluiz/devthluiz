import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import Link from "gatsby-plugin-transition-link/AniLink"

import ptLogo from "../images/pt.png"
import enLogo from "../images/en.png"

const NavLink = ({ children, to }) => (
  <Link
    to={to}
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

const NavBar = ({ ...props }) => {
  const { t, i18n } = useTranslation()

  const [_, setValues] = useState({
    language: "pt",
  })

  const width = {
    width: "50px",
  }

  function handleChange(lang, event) {
    i18n.changeLanguage(lang)

    setValues(oldValues => ({
      ...oldValues,
      ["language"]: lang,
    }))
    window.location.href = `/${lang}`
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm bg-primary-color">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav justify-content-center container">
          <li class="nav-item mr-5">
            <NavLink class="nav-link" to={props.language + "/"}>
              Home
            </NavLink>
          </li>
          <li class="nav-item mr-5">
            <NavLink class="nav-link" to={props.language + "/blog"}>
              Blog
            </NavLink>
          </li>
          <li class="nav-item mr-5">
            <NavLink class="nav-link" to={props.language + "/tags"}>
              Tags
            </NavLink>
          </li>
          {props.language != "en" && (
            <li class="nav-item mr-5">
              <img
                src={enLogo}
                alt="EN"
                onClick={e => handleChange("en", e)}
                style={width}
              />
            </li>
          )}
          {props.language != "pt" && (
            <li class="nav-item mr-5">
              <img
                src={ptLogo}
                alt="PT"
                onClick={e => handleChange("pt", e)}
                style={width}
              />
            </li>
          )}
          {/* 
        <li class="nav-item mr-5">
          <NavLink class="nav-link" to="/search">
            Search
          </NavLink>
        </li>
        */}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
