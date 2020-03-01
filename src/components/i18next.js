import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const detectorOptions = {
  // order and from where user language should be detected
  order: [
    "localStorage",     
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
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "dev.thluiz.com",

  // only detect languages that are in the whitelist
  checkWhitelist: true,
}

i18next.use(LanguageDetector).init({
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
