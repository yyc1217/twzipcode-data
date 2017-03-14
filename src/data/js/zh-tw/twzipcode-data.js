const counties = require('./counties')
const zipcodes = require('./zipcodes')
const _ = require('lodash')

module.exports = {
    counties,
    zipcodes,
    get groupByCounty() {
        return  _.groupBy(zipcodes, 'county')
    },
    get keyByZipcode() {
        return _.keyBy(zipcodes, 'zipcode')
    }
}