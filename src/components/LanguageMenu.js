import React from "react"
import { useTranslation } from "react-i18next"

import ptLogo from "../images/pt.png"
import enLogo from "../images/en.png"

const LanguageMenu = props => {
  const { i18n } = useTranslation()

  function handleChange(lang) {    
    window.location.href = `/${lang}`
  }

  const width = {
    width: "50px",
  }

  if (props.language !== "en")
    return (
      <li class="nav-item mr-5">
        <img
          src={enLogo}
          alt="EN"
          onClick={e => handleChange("en", e)}
          style={width}
        />
      </li>
    )

  return (
    <li class="nav-item mr-5">
      <img
        src={ptLogo}
        alt="PT"
        onClick={e => handleChange("pt", e)}
        style={width}
      />
    </li>
  )
}

export default LanguageMenu
