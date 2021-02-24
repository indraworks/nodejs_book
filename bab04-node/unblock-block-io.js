//contoh blocking atau syncronus

console.log('perintah pertama');

console.log('perintah kedua');

console.log('perintah ketiga \n\n\n');

//contoh non blcoking io atau aynsc
//kit apakai metode setInterval utk tunda slama 2s = 2000

console.log('perintah pertamax');
setTimeout(() => {
  console.log('perintah keduax'), 2000;
});
console.log('perintah ketigax');

/*
di nodejs ada module/metodhoe  yg pake blocking dan non  blockingio 
salah satu contohnya adalah dibelakangnya ada kata Sync
ini blocking contoh readfileSync
hasil:
perintah pertama
perintah kedua
perintah ketiga 


//trlhaat yag asyncronus dikerjakan adalah 
//ketifa smbari yg kedua blum slsai 
perintah pertamax
perintah ketigax
perintah keduax


*/
