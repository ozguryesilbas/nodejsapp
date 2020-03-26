//var http = require('http');
var fs = require('fs');
var express = require('express'); //express ile aşağıdaki işlemleri daha kolay yapacağız
var app = express(); //express nesnemizi oluşturduk
var path = require('path');
var pagecontroller = require('./pagecontroller');

//css klasörünü herkese açtık, yoksa cssi görmez
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', pagecontroller.index);

app.get('/login', pagecontroller.login);

app.listen(8005);

/*
var homeController = function(req, res) {
    //nodejs blocksuzdur, o yüzden işlem bitince function (err, data) çağarıyoruz
    //bu fonksiyonlar (aynı şekilde function (req, res) de) callback fonksiyonlarıdır
    //işlemlerin sırayla çalışmasını sağlamak için kullanılırlar
    fs.readFile("index.html", function (err, data) {
        res.write(data);
        res.end("Html dosyası okundu");
    });
}

var loginController = function(req, res) {
    fs.readFile("login.html", function (err, data) {
        res.write(data);
        res.end("Html dosyası okundu");
    });
}

var yonlendirici = new Object();

//hash tablosuna yazdık
yonlendirici['/'] = homeController;
yonlendirici['/login'] = loginController;

var server = http.createServer(function (req, res) {

    if(req.url in yonlendirici){
        yonlendirici[req.url](req,res);
    }

    console.log(req.url);

});

server.listen(8005); */
