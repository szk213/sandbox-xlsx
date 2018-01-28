var XLSX = require('xlsx');

const workBook = XLSX.readFile('./sample/sample1.xlsx');

// 先頭のシート名表示
const firstSheetName = workBook.SheetNames[0];
console.log(firstSheetName); // template

// 先頭のシートのB3
const workSheet = workBook.Sheets[firstSheetName];
console.log(workSheet.B3);

// { t: 's',
//   v: 'No.',
//   r: '<t>No.</t><phoneticPr fontId="1"/>',
//   h: 'No.',
//   w: 'No.' }
