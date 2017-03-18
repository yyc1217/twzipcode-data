import should from 'should'
import twzipcode from '../src'

describe('Test illegal locale', () => {
  let illegal = [
    'fr',
    null
  ]

  let notSupport = /not support/
  illegal.forEach((value) => {
    it(`should throw not support error with locale ${value}`, () => {
      should(() => twzipcode(value)).throw(notSupport)
    })
  })

  let county = {
    id: '臺北市',
    name: '臺北市'
  }

  it('should defaults to zh-tw with locale undefined', () => twzipcode().counties.should.containEql(county))
})
