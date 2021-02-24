//contoh blocking io js

const fs = require('fs');
//persiapan baca file fs
const data = fs.readFileSync('data.txt');
console.log('\nisi file');

console.log(data.toString());
console.log('\n data selesai dibaca');



/*
readFIleSymnc ukt metode blocking io
readFile saja utk non blocking io

*/