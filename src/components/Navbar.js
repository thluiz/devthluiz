import React from "react"

import { Translate } from "./withI18n"

import Link from "./LocalizedLink"
import LanguageMenu from "./LanguageMenu"

const NavBar = ({ ...props }) => {
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
            <Link { ...props } class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item mr-5">
            <Link { ...props } class="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li class="nav-item mr-5">
            <Link { ...props } class="nav-link" to="/tags">
              Tags
            </Link>
          </li>
          <LanguageMenu {...props}></LanguageMenu>
        </ul>
      </div>
    </nav>
  )
}

export default Translate(NavBar)

/*
const Search = () => {
  return (
    <li class="nav-item mr-5">
      <Link class="nav-link" to="/search">
        Search
      </Link>
    </li>
  )
}
*/