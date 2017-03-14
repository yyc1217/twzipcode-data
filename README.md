# TwZipcode
> 開發用中華郵政郵遞區號 / Taiwan zipcodes for developers.


1. 將[中華郵政](www.post.gov.tw)的**「臺灣地區郵遞區號前3碼一覽表 103/12(Excel版)」**轉成js，方便開發時可直接引用。
2. 英文譯名來自於[地名資訊服務網](gn.moi.gov.tw)的**「臺灣地區鄉鎮市區級以上行政區域名稱中英對照表.pdf」**。

## Install

### Bower
```sh
bower install twzipcode-data
```

### npm
```sh
npm install twzipcode-data --save-dev
```

## 資料結構
| 參數    | 說明           |
|---------|----------------|
| zipcode | 3碼郵遞區號    |
| county  | 縣、市或直轄市 |
| city    | 鄉鎮市區       |

## i18n
In `./src`, add `counties.js` and `zipcodes.js`, see [src/zh-tw](src/zh-tw).