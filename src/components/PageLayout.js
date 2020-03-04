import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import useTheme from "../useTheme"

import { Translate } from "./withI18n"

function PageLayout({ children, t, i18n, ...props }) {
  const language = props.language

  const { theme, toggleTheme } = useTheme()

  function getTheme() {
    if (theme === "light") {
      typeof window !== "undefined" &&
        document.documentElement.style.setProperty("--bg-color", "#FFF")
      return (
        <img
          src="https://img.icons8.com/ios-glyphs/24/FFFFFF/moon-symbol.png"
          alt="moon-icon"
        />
      )
    } else {
      typeof window !== "undefined" &&
        document.documentElement.style.setProperty("--bg-color", "#12181B")
      return (
        <img
          src="https://img.icons8.com/android/24/FFFFFF/sun.png"
          alt="sun-icon"
        />
      )
    }
  }

  return (
    <div className={theme}>
      <Navbar language={language} />
      <button className="btn theme-toggle-button" onClick={toggleTheme}>
        {getTheme()}
      </button>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Translate(PageLayout)
