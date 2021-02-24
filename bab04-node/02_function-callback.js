function onRequest(request, response) {
  response.writeHead(200, { ContentType: 'text/html' });
  response.write('<h2>Haloo nodejs</h2>');
  response.end();
}

const sercer = http.createServer();
server.on('request', onRequest);
/*
sbgaina nodejs menggunakan function callback adalah function anomious tanpa nama
contoh function() {};
atau pakae es6 ini sama ===> ()=> {}

kata on  atau kata addListener mewakili event yg datang disini adalah request dari user 
jika minta adtrdd


*/
