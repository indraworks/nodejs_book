const fs = require('fs');
//persiapan baca file fs
const data = fs.readFile('data.txt', (err, data) => {
  if (err) {
    return err.message || err;
  }
  console.log('\nisi file');

  console.log(data.toString());
  console.log('\n data selesai dibaca');
});

/*
kaau async slalu ada callbacak function atau fb 
jadi ada nilai errro yg dikemblikan atau nilai successnya 


*/
