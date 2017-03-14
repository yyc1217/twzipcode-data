import { groupBy, keyBy } from 'lodash'
import fs from 'fs'

/**
 * Check locale directory exists.
 * @param {string} path
 */


/**
 *
 * @param {string} locale
 */
let checkDirExists = (locale) => {
  let isDirSync = (path) => {
    try {
      return fs.statSync(path).isDirectory()
    } catch (e) {
      if (e.code === 'ENOENT') {
        return false
      } else {
        throw e
      }
    }
  }

  if (!isDirSync(`./src/${locale}`)) {
    throw new Error(`Locale ${locale} is not support. Help localization? See https://github.com/yyc1217/twzipcode-data#i18n`)
  }
}

/**
 * Read data.
 * @param {string} locale
 */
let of = (locale) => {
  checkDirExists(locale)

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

module.exports = (locale) => {
  return data(of(locale))
}
