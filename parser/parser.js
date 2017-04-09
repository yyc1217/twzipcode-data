/**
 * created by Ausir(ausir@finpo.com.tw) 2017/4/9
 * parse Zip 3+2 from 中華郵政 xml file to js code
 * 依照中華郵政查詢規範「釣魚臺列嶼」 編在宜蘭縣轄區內，「東沙群島」、「南沙群島」編在高雄市轄區內。
 */

const fs = require('fs');
const parser = require('xml2json-light');
const _ = require('lodash');
const moment = require('moment');

const fileName = 'Zip32_10601.xml';
const parseResults = parser.xml2json(fs.readFileSync(`${__dirname}/data-source/${fileName}`, 'utf-8')).dataroot.Zip32;
console.log(`已讀取3+2郵遞區號資料 共 ${parseResults.length} 筆 請與EXCEL資料做重複確認`);
const DiaoyutaiList = _.filter(parseResults, { 'City': '釣魚臺' });
const SouthIslandList = _.filter(parseResults, { 'City': '南海島' });

if (DiaoyutaiList.length === 0) throw new Error('無法在 source 中找到釣魚臺，請確認來源資料。');
if (SouthIslandList.length === 0) throw new Error('無法在 source 中找到南海島，請確認來源資料。');

DiaoyutaiList.forEach(item => { item.City = '宜蘭縣'; });
SouthIslandList.forEach(item => { item.City = '高雄市'; });

parseResults.forEach(item => { item.Zip3 = item.Zip5.substr(0,3); });

const counties = _.uniqBy(parseResults, 'City').map(item => ({ id: item.City, name: item.City }));
console.log(`共計將轉出城市一共有 ${counties.length} 筆資料。`);
const zipcodes = _.uniqBy(parseResults, 'Zip3').map(item => ({ id: item.Zip3, county: item.City, city: item.Area }));
console.log(`共計將轉出市鄉鎮區一共有 ${zipcodes.length} 筆資料。`);

let countiesString = `/*
data-sourece is ${fileName} 
created at ${moment().format('YYYY-MM-DD HH:mm:ss')} 
*/
module.exports = [
`;
counties.forEach(item => {
  countiesString += `  { id: '${item.id}', name: '${item.name}' },
`;
});
countiesString += `];
`;
if (eval(countiesString).length == counties.length) {
  console.log('Counties export string check success.');
} else {
  throw new Error('Counties export string check fail.');
}

let zipcodeString = `/*
data-sourece is ${fileName} 
created at ${moment().format('YYYY-MM-DD HH:mm:ss')} 
*/
module.exports = [
`;
zipcodes.forEach(item => {
  zipcodeString += `  { id: ${item.id}, county: '${item.county}', city: '${item.city}' },
`;
});
zipcodeString += `];
`;
if (eval(zipcodeString).length == zipcodes.length) {
  console.log('Zipcodes export string check success.');
} else {
  throw new Error('Zipcodes export string check fail.');
}
console.log('準備將檔案寫入至 src/zh-tw 資料夾中..');
fs.writeFileSync(`${__dirname}/../src/zh-tw/counties-${moment().format('YYYYMMDD')}.js`, countiesString, 'utf-8');
fs.writeFileSync(`${__dirname}/../src/zh-tw/zipcodes-${moment().format('YYYYMMDD')}.js`, zipcodeString, 'utf-8');

console.log('完成');
