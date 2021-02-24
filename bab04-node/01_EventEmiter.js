///////////////
// name:EventEmiter,js

/////////////

var events = require('events');
//mbuat object dari klas eventemiter
//baru kita buat klass turunnanya dan kita pakai
// class MyEventEmiter extends events.EventEmitter

var obj = new events.EventEmitter(); //tt hurufnya doublet ya :D

//mend\efinisikan event mulai

//cara 1 pakai on
// obj.on('mulai', () => {
//   console.log("Terjadi event 'mulai'");
// });

//cara 2:
obj.addListener('mulai', () => {
  console.log('terjadi event mulai');
});

//memdefiniskan event selesai
// //cara 1 pakai on
// obj.on('selesai', () => {
//   console.log("terjadi event 'selesai'");
// });

//cara 2
obj.addListener('selesai', () => {
  console.log('terjadi event selesai');
});

//memulai
//jalankan event yg sudah didefiniskan
//dgn cara memanggil metode emit()
obj.emit('mulai');
for (let i = 0; i < 20; i++) {
  process.stdout.write((i + 1).toString() + '');
}
obj.emit('selesai');

/*
hampir smua pada node klas dibuat berdasarkan event nah selalu pakai event emiter 
atau cass trurunan dari event emiter ini 
jadi kita mdefinisakn kejadian event trtentu supaya bisa jana ya dgn mggunakan klass ini dan atau klas turunun
event emiter ini 
kode on bis di ganti sprti js front end yatu dgn addEventListener
tapu di node cukup ditulis obj.addListener obj dsini adalah obj yaitu 
event 'mulai' itu sndri


*/
