import test from './integrity.test'

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
  locale: 'en',
  TEST_COUNTY,
  TEST_ZIPCODE
})

test({
  locale: 'en-US',
  TEST_COUNTY,
  TEST_ZIPCODE
})
