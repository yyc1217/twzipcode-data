const tw = require('./data/js/zh-tw/twzipcode-data')
//const en = require('./data/js/twzipcode-data.en')

let of = (data) => {
    return {
        counties: data.counties,
        zipcodes: data.zipcodes,
        computed: {
            groupByCounty: data.groupByCounty,
            keyByZipcode: data.keyByZipcode
        }
    }
}

let main = {
    'zh-tw' : of(tw),
//    en: of(en)
}

module.exports = main