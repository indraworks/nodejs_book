//kita bisa melakukan 2 cara utk buat obj
//atau kelas turunan sndri dari class eventemitter

var events = require('events');

//mmbuaat class turunan dari class eventemiter
class MyEventEmitter extends events.EventEmitter {
  constructor() {
    super();
  }
}
//mmbuat obj dari klass eventemitter
//atau instasiate
const obj = new MyEventEmitter(); //kita instasiate dgn class turunan ini

//definiskan event mulai
obj.on('mulai', () => {
  console.log("event 'mulai'");
});

//definisikan event selasai
obj.on('selesai', () => {
  console.log("event 'seelsai'");
});

//jalankan event yg sudah didefiniskan
//dgn cara memanggil metode emit()
obj.emit('mulai');
for (let i = 0; i < 20; i++) {
  process.stdout.write((i + 1).toString() + ' ');
  // console.log(`${i + 1}`.toString() + ' ');
}

obj.emit('selesai');

/*
penjelasan antara stdout dng console.log 
Looking at the Node docs apparently console.log is
 just process.stdout.write with a line-break at the end:

console.log = function (d) {
  process.stdout.write(d + '\n');
};
jadi kalau gak mau ganti baris pilhannya pakai std.write!


*/
