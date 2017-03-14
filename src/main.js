const tw = require('./data/js')('zh-tw')
const en = require('./data/js')('en')

let of = ({counties, zipcodes, groupByCounty, keyByZipcode}) => {
    return {
        counties,
        zipcodes,
        computed: {
            groupByCounty,
            keyByZipcode
        }
    }
}

let main = {
    get 'zh-tw'() {
        return of(tw)
    },
    get 'en'() {
        return of(en)
    }
}

module.exports = main