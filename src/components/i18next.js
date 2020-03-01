import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import getDefaultLanguage from "../getDefaultLanguage";
const locales = require("../../locale/config")

const detectorOptions = {
  // order and from where user language should be detected
  order: [
    "WindowLocationDetector",
    "localStorage",    
    "querystring",
    "cookie",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  caches: [],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "dev.thluiz.com",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
}

const languageDetector = new LanguageDetector()
languageDetector.addDetector({
  name: "WindowLocationDetector",

  lookup() {
      if(window.location.pathname.length > 2) {
        var lang = window.location.pathname.substr(1, 2);              
        if(locales[lang]) {
            return lang;
        }
      }    
          
    return getDefaultLanguage();
  },

  cacheUserLanguage(lng, options) {
    // options -> are passed in options
    // lng -> current language, will be called after init and on changeLanguage
    // store it
  },
})

i18next.use(languageDetector).init({
  detection: detectorOptions,
  lang: "pt",
  fallbackLng: "pt",
  resources: {
    pt: {
      translations: require("../../locale/pt/messages.json"),
    },
    en: {
      translations: require("../../locale/en/messages.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["pt", "en"]

export default i18next
