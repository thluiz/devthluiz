import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

const activeStyle = {
  color: "#FFF",
}

const NavLink = ({ children, to }) => (
  <Link
    to={to}
    class="primary-color-1"
    activeStyle={activeStyle}    
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

export default () => (
  <nav
    class="navbar navbar-expand-lg navbar-light shadow-sm bg-primary-color"    
  >
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
          <NavLink class="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li class="nav-item mr-5">
          <NavLink class="nav-link" to="/blog">
            Blog
          </NavLink>
        </li>
        <li class="nav-item mr-5">
          <NavLink class="nav-link" to="/tags">
            Tags
          </NavLink>
        </li>
        <li class="nav-item mr-5">
          <NavLink class="nav-link" to="/search">
            Search
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

