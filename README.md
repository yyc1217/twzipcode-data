# TwZipcode
> 開發用中華郵政郵遞區號 / Taiwan zipcodes for developers.

1. 將[中華郵政](www.post.gov.tw)的**「臺灣地區郵遞區號前3碼一覽表 103/12(Excel版)」**轉成js，方便開發時可直接引用。
2. 英文譯名來自於[地名資訊服務網](gn.moi.gov.tw)的**「臺灣地區鄉鎮市區級以上行政區域名稱中英對照表.pdf」**。

[![Travis](https://img.shields.io/travis/yyc1217/twzipcode-data.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/yyc1217/twzipcode-data/badge.svg?branch=master)](https://coveralls.io/github/yyc1217/twzipcode-data?branch=master)
[![Github All Releases](https://img.shields.io/github/downloads/yyc1217/twzipcode-data/total.svg)]()
[![npm](https://img.shields.io/npm/dt/twzipcode-data.svg)]()
[![npm](https://img.shields.io/npm/v/twzipcode-data.svg)]()
[![GitHub release](https://img.shields.io/github/release/yyc1217/twzipcode-data.svg)]()
[![npm](https://img.shields.io/npm/l/twzipcode-data.svg)]()
[![GitHub stars](https://img.shields.io/github/stars/yyc1217/twzipcode-data.svg?style=social&label=Star)]()

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

// 所有縣市
let counties = data.counties

// 所有郵遞區號
let zipcodes = data.zipcodes

// 以縣市名稱分組的郵遞區號
let zipcodesGroupByCounty = data.computed.zipcodes.groupByCounty

// 以郵遞區號為key的郵遞區號
let zipcodesKeyById = data.computed.zipcodes.keyById

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

## vue-twzipcode
中華郵政郵遞區號 Vuejs components：[twzipcode-vue](https://github.com/yyc1217/twzipcode-vue)