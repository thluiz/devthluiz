import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import ptLogo from "../images/pt.png"
import enLogo from "../images/en.png"

const LanguageMenu = props => {
  const { t, i18n } = useTranslation()

  const [_, setValues] = useState({
    language: "pt",
  })

  function handleChange(lang, event) {
    i18n.changeLanguage(lang)

    setValues(oldValues => ({
      ...oldValues,
      ["language"]: lang,
    }))
  } 

  return (
    <ul class="nav justify-content-center container">      
      <li class="nav-item mr-5">
        <img src={enLogo} alt="EN" onClick={e => handleChange('en', e)} />
      </li>      
      <li class="nav-item mr-5">
        <img src={ptLogo} alt="PT" onClick={e => handleChange('pt', e)} />
      </li>      
    </ul>
  )
}

export default LanguageMenu
