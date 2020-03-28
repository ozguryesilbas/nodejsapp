var mongoose = require('mongoose');

mongoose.Proimise = require('bluebird'); //kullanıcağı promise metodunu belirttiki js in asenkron olmasından kaynaklı

var mongoDB = 'mongodb://localhost/blog';

//js asenkron olduğu için işlemin bittiğini dönüş değerinden alma şansımız yoktur
//o yüzden daima bir fonksiyon çağarıldığında bittiğini belirten bir callback fonksiyon alıyor
//sağdaki fonksiyon callback fonksiyonu bittiğinde devreye girecektir
mongoose.connect(mongoDB, function (err) {
    if(err){
        console.log('Bağlantı hatası: ' + err);
    } else {
        console.log('Bağlantı kuruldu: ' + mongoDB);
    }
});