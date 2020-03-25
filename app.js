var http = require("http");
var fs = require("fs")

var server = http.createServer(function (req, res) {

    if(req.url=="/"){
        //nodejs blocksuzdur, o yüzden işlem bitince function (err, data) çağarıyoruz
        //bu fonksiyonlar (aynı şekilde function (req, res) de) callback fonksiyonlarıdır
        //işlemlerin sırayla çalışmasını sağlamak için kullanılırlar
        fs.readFile("index.html", function (err, data) {
            res.write(data);
            res.end("Html dosyası okundı");
        });
    }

    if(req.url=="/login"){
        fs.readFile("login.html", function (err, data) {
            res.write(data);
            res.end("Html dosyası okundı");
        });
    }


    console.log(req.url);


});

server.listen(8005);