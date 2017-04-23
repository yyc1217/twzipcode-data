# TwZipcode
> 開發用中華郵政郵遞區號 / Taiwan zipcodes for developers.

1. 將[中華郵政](www.post.gov.tw)的 **「3+2碼郵遞區號XML檔 106/01」** 轉成js，方便開發時可直接引用。
2. 英文譯名來自於[地名資訊服務網](gn.moi.gov.tw)的 **「臺灣地區鄉鎮市區級以上行政區域名稱中英對照表.pdf」** 。

[![Travis](https://img.shields.io/travis/yyc1217/twzipcode-data.svg)](https://travis-ci.org/yyc1217/twzipcode-data)
[![Coverage Status](https://coveralls.io/repos/github/yyc1217/twzipcode-data/badge.svg?branch=master)](https://coveralls.io/r/yyc1217/twzipcode-data)
[![Github All Releases](https://img.shields.io/github/downloads/yyc1217/twzipcode-data/total.svg)](https://github.com/yyc1217/twzipcode-data/releases)
[![npm](https://img.shields.io/npm/dt/twzipcode-data.svg)](https://www.npmjs.com/package/twzipcode-data)
[![npm](https://img.shields.io/npm/v/twzipcode-data.svg)](https://www.npmjs.com/package/twzipcode-data)
[![GitHub release](https://img.shields.io/github/release/yyc1217/twzipcode-data.svg)](https://github.com/yyc1217/twzipcode-data/releases)
[![npm](https://img.shields.io/npm/l/twzipcode-data.svg)](https://github.com/yyc1217/twzipcode-data)
[![GitHub stars](https://img.shields.io/github/stars/yyc1217/twzipcode-data.svg?style=social&label=Star)](https://github.com/yyc1217/twzipcode-data)

## Install

### Bower
```sh
bower install twzipcode-data
```

### npm
```sh
npm install twzipcode-data --save-dev
```

## 用法 Usage
```javascript
import twzipcode from 'twzipcode-data'

// 英文
let data_en = twzipcode('en')

// 預設中文
let data = twzipcode()

// 或是傳入Accept-Language
let data_guess = twzipcode('zh-TW,zh;q=0.8,en-US;q=0.5,en;q=0.3')

// 所有縣市
let counties = data.counties

// 所有郵遞區號
let zipcodes = data.zipcodes

```

## 資料結構 / Data Structure

### 縣市 / County Object
| 參數    | 說明           |
|---------|---------------|
| id      | 中文名稱       |
| name    | 縣市名稱       |

### 郵遞區號 / Zipcode Object
| 參數    | 說明           |
|---------|---------------|
| id      | 3碼郵遞區號    |
| county  | 縣、市或直轄市中文名稱 |
| city    | 鄉鎮市區中文名稱 |

## Build Setup

``` bash
# install dependencies
npm install

# run tests
npm run test

# build for production with minification
npm run build
```

## i18n
1. Create a directory in `./src/{locale}`.
2. In `./src/{locale}`, add `counties.js` and `zipcodes.js`.
3. In `./test`, add `integrity.test.{locale}.js`.
4. In `.src/locales.js`, append `{locale}` to export array.

See [src/zh-tw](src/zh-tw).

> Directory name should be lowercase(zh-tw), locale name in files should be uppercase for extra information(zh-TW).

## vue-twzipcode
中華郵政郵遞區號 Vuejs components：[twzipcode-vue](https://github.com/yyc1217/twzipcode-vue)