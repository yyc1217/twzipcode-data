import test from './integrity.test'

const locale = 'zh-tw'
const TEST_COUNTY = {
  id: '臺北市',
  name: '臺北市'
}

const TEST_ZIPCODE = {
  id: 100,
  county: '臺北市',
  city: '中正區'
}

test({
  locale,
  TEST_COUNTY,
  TEST_ZIPCODE
})

test({
  locale: 'zh-TW',
  TEST_COUNTY,
  TEST_ZIPCODE
})
