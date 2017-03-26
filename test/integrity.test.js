import 'should'
import twzipcode from '../dist'

const COUNTIES_COUNT = 22
const ZIPCODES_COUNT = 368

export default ({
    locale,
    TEST_COUNTY,
    TEST_ZIPCODE
}) => {
  let data = twzipcode(locale)

  describe(`Integrity of ${locale}`, () => {
    it(`should contain ${COUNTIES_COUNT} counties`, () => data.counties.should.have.length(COUNTIES_COUNT))
    it(`should contain ${JSON.stringify(TEST_COUNTY)}`, () => data.counties.should.containEql(TEST_COUNTY))

    it(`should contain ${ZIPCODES_COUNT} zipcodes`, () => data.zipcodes.should.have.length(ZIPCODES_COUNT))
    it(`should contain ${JSON.stringify(TEST_ZIPCODE)}`, () => data.zipcodes.should.containDeepOrdered([TEST_ZIPCODE]))

    it(`should contain ${COUNTIES_COUNT} county groups`, () => data.computed.zipcodes.groupByCounty.should.have.size(COUNTIES_COUNT))
    it(`should contain ${JSON.stringify(TEST_ZIPCODE)} group by ${TEST_COUNTY.name}`, () => data.computed.zipcodes.groupByCounty.should.containDeepOrdered({
      [TEST_COUNTY.name]: [
        TEST_ZIPCODE
      ]
    }))

    it(`should contain ${ZIPCODES_COUNT} zipcodes key by its id`, () => data.computed.zipcodes.keyById.should.have.size(ZIPCODES_COUNT))
    it(`should contain ${JSON.stringify(TEST_ZIPCODE)} key by zipcode ${TEST_ZIPCODE.id}`, () => data.computed.zipcodes.keyById.should.containDeepOrdered({
      [TEST_ZIPCODE.id]: TEST_ZIPCODE
    }))
  })
}
