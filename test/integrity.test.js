import 'should'

const COUNTIES_COUNT = 22
const ZIPCODES_COUNT = 368

export default ({
    locale,
    TEST_COUNTY,
    TEST_CITY,
    TEST_ZIPCODE
}) => {
  const twzipcode = require('../src/main')(locale)

  const TEST_CITY_OBJECT = {
    'city': TEST_CITY
  }

  describe(`Integrity of ${locale}`, () => {
    it('should contain every counties', () => twzipcode.counties.should.have.length(COUNTIES_COUNT))
    it(`should contain ${TEST_COUNTY}`, () => twzipcode.counties.should.containEql(TEST_COUNTY))

    it('should contain every zipcodes', () => twzipcode.zipcodes.should.have.length(ZIPCODES_COUNT))
    it(`should contain ${TEST_CITY}`, () => twzipcode.zipcodes.should.containDeepOrdered([TEST_CITY_OBJECT]))

    it('should group by county', () => twzipcode.computed.groupByCounty.should.have.size(COUNTIES_COUNT))
    it(`should contain ${TEST_CITY} group by ${TEST_COUNTY}`, () => twzipcode.computed.groupByCounty.should.containDeepOrdered({
      [TEST_COUNTY]: [
        TEST_CITY_OBJECT
      ]
    }))

    it('should key by zipcode', () => twzipcode.computed.keyByZipcode.should.have.size(ZIPCODES_COUNT))
    it(`should contain ${TEST_CITY} key by zipcode ${TEST_ZIPCODE}`, () => twzipcode.computed.keyByZipcode.should.containDeepOrdered({
      [TEST_ZIPCODE]: TEST_CITY_OBJECT
    }))
  })
}
