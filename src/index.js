import locales from './locales'
import acceptLanguage from 'accept-language'

acceptLanguage.languages(locales)

/**
 * Read data.
 * @param {string} locale
 */
let of = (locale) => {
  locale = locale.toLowerCase()
  const counties = require(`./${locale}/counties-20170410`)
  const zipcodes = require(`./${locale}/zipcodes-20170410`)

  return {
    counties,
    zipcodes
  }
}

/**
 * Construct response format.
 * @param {Object} options
 */
let data = ({ counties, zipcodes, groupByCounty, keyById }) => {
  return {
    counties,
    zipcodes
  }
}

export default (locale = '*') => {
  locale = acceptLanguage.get(locale)
  return data(of(locale))
}
