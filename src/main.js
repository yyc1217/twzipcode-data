const tw = require('./data/js/twzipcode-data')

module.exports = {
    counties: tw.counties,
    zipcodes: tw.zipcodes,
    computed : {
        groupByCounty: tw.groupByCounty,
        keyByZipcode: tw.keyByZipcode
    },

    en: {
        counties: "",
        zipcodes: "",
    }
}