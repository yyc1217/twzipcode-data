import 'should'
import twzipcode from '../src'

const COUNTIES_COUNT = 22
const ZIPCODES_COUNT = 368

export default ({
    locale,
    TEST_COUNTY,
    TEST_CITY,
    TEST_ZIPCODE
}) => {
  let data = twzipcode(locale)

  const TEST_CITY_OBJECT = {
    'city': TEST_CITY
  }

  describe(`Integrity of ${locale}`, () => {
    it('should contain every counties', () => data.counties.should.have.length(COUNTIES_COUNT))
    it(`should contain ${TEST_COUNTY}`, () => data.counties.should.containEql(TEST_COUNTY))

    it('should contain every zipcodes', () => data.zipcodes.should.have.length(ZIPCODES_COUNT))
    it(`should contain ${TEST_CITY}`, () => data.zipcodes.should.containDeepOrdered([TEST_CITY_OBJECT]))

    it('should group by county', () => data.computed.groupByCounty.should.have.size(COUNTIES_COUNT))
    it(`should contain ${TEST_CITY} group by ${TEST_COUNTY}`, () => data.computed.groupByCounty.should.containDeepOrdered({
      [TEST_COUNTY]: [
        TEST_CITY_OBJECT
      ]
    }))

    it('should key by zipcode', () => data.computed.keyByZipcode.should.have.size(ZIPCODES_COUNT))
    it(`should contain ${TEST_CITY} key by zipcode ${TEST_ZIPCODE}`, () => data.computed.keyByZipcode.should.containDeepOrdered({
      [TEST_ZIPCODE]: TEST_CITY_OBJECT
    }))
  })
}
