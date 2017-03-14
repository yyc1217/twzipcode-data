import data from './data/js'

let of = ({ counties, zipcodes, groupByCounty, keyByZipcode }) => {
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
  get 'zh-tw' () {
    return of(data('zh-tw'))
  },
  get 'en' () {
    return of(data('en'))
  }
}

module.exports = main
