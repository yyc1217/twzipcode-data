import { groupBy, keyBy } from 'lodash'

export default (locale) => {
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
