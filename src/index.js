import { groupBy, keyBy } from 'lodash'

const locales = [
  'zh-tw',
  'en'
]

/**
 * Check whether locale is supported.
 * @param {string} path
 */
let checkSupportLocale = (locale) => {
  if (locales.indexOf(locale) < 0) {
    throw new Error(`Locale ${locale} is not support. Help localization? See https://github.com/yyc1217/twzipcode-data#i18n`)
  }
}

/**
 * Read data.
 * @param {string} locale
 */
let of = (locale) => {
  checkSupportLocale(locale)

  const counties = require(`./${locale}/counties`)
  const zipcodes = require(`./${locale}/zipcodes`)

  return {
    counties,
    zipcodes,
    get groupByCounty () {
      return groupBy(zipcodes, 'county')
    },
    get keyByZipcode () {
      return keyBy(zipcodes, 'zipcode')
    }
  }
}

/**
 * Construct response format.
 * @param {Object} options
 */
let data = ({ counties, zipcodes, groupByCounty, keyByZipcode }) => {
  return {
    counties,
    zipcodes,
    computed: {
      groupByCounty,
      keyByZipcode
    }
  }
}

export default (locale = 'zh-tw') => {
  locale = locale || ''
  locale = locale.toLowerCase()

  return data(of(locale))
}
