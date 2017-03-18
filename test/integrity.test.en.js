import test from './integrity.test'

const locale = 'en'
const TEST_COUNTY = {
  id: '臺北市',
  name: 'Taipei City'
}

const TEST_ZIPCODE = {
  id: 100,
  county: 'Taipei City',
  city: 'Zhongzheng District'
}

test({
  locale,
  TEST_COUNTY,
  TEST_ZIPCODE
})

test({
  locale: locale.toUpperCase(),
  TEST_COUNTY,
  TEST_ZIPCODE
})
