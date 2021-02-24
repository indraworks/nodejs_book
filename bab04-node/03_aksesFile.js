//////////
// write file js    ///
/////////

var fs = require('fs');
//file blocking
var data = `
pecel
rujak cingur
mendoan
orem orem
nasgor
lontong balap
`;
//klo non-blocking slsau ada calback func utk penangann error
fs.writeFile('data.txt', data, function (err, response) {
  if (err) {
    console.log(err.message);
  }
  console.log('file data.txt tlah trbuat diidrectory actif');
});

/*
utk blcokingio dgn writeFileSync() non blockingIo :writeFile
kalau sudah ada dgn nama sama file akan overwrite


*/



