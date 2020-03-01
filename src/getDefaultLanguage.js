const locales = require("../locale/config")
const languages = Object.keys(locales).map(function (key) { return locales[key]; });
const default_language = languages.find(l => l.default).path;

export default () => default_language
