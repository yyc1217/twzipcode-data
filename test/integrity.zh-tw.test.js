const should = require("should")
const twzipcode = require("../src/main")['zh-tw']

const COUNTIES_COUNT = 22
const ZIPCODES_COUNT = 368

const TEST_COUNTY = '臺北市'
const TEST_CITY = '中正區'
const TEST_CITY_OBJECT = {
    "city": TEST_CITY
}
const TEST_ZIPCODE = "100"

describe('Integrity of twzipcode data', () => {

    it('should contain every counties', () => twzipcode.counties.should.have.length(COUNTIES_COUNT))
    it(`should contain ${TEST_COUNTY}`, () => twzipcode.counties.should.containEql(TEST_COUNTY))

    it('should contain every zipcodes', () => twzipcode.zipcodes.should.have.length(ZIPCODES_COUNT))
    it(`should contain ${TEST_CITY}`, () => twzipcode.zipcodes.should.containDeepOrdered([TEST_CITY_OBJECT]))

    it('should group by county', () => twzipcode.computed.groupByCounty.should.have.size(COUNTIES_COUNT))
    it(`should contain ${TEST_CITY} group by ${TEST_COUNTY}`, () => twzipcode.computed.groupByCounty.should.containDeepOrdered({
        [TEST_COUNTY] : [
            TEST_CITY_OBJECT
        ]
    }))

    it('should key by zipcode', () => twzipcode.computed.keyByZipcode.should.have.size(ZIPCODES_COUNT))
    it(`should contain ${TEST_CITY} key by zipcode ${TEST_ZIPCODE}`, () => twzipcode.computed.keyByZipcode.should.containDeepOrdered({
        [TEST_ZIPCODE]: TEST_CITY_OBJECT
    }))
})
