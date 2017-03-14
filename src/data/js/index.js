import { groupBy, keyBy } from 'lodash'
import fs from 'fs'

let isDirSync = (aPath) => {
  try {
    return fs.statSync(aPath).isDirectory()
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false
    } else {
      throw e
    }
  }
}

export default (locale) => {
  if (isDirSync(`./src/data/js/${locale}`)) {
    throw new Error(`Locale ${locale} is not support. Help localization? See https://github.com/yyc1217/twzipcode-data#i18n`)
  }

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
