import of from './data/js'

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
