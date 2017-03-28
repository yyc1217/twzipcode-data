import 'should'
import twzipcode from '../dist'

describe('Test illegal locale', () => {
  let county = {
    id: '臺北市',
    name: '臺北市'
  }

  let illegals = [
    'fr',
    undefined,
    null
  ]

  illegals.forEach(illegal => {
    it(`should defaults to zh-tw with locale ${illegal}`, () => twzipcode(illegal).counties.should.containEql(county))
  })
})
