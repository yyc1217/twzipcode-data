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
  })
}
