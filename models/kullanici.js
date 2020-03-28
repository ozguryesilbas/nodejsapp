var mongoose = require('mongoose'); //mongoose'u çektik

var Schema = mongoose.Schema; //mongoose'dan şema oluşturduk

var kullaniciSchema = new Schema({ //şemadan kullanıcı şeması oluşturduk
    ad: String,
    soyad: String,
    kullaniciAdi: {type: String, required: true, unique: true},
    sifre: {type: String, required: true}
}, {collection:'kullanicilar'}); //bu parametreyi collection ismini belirlemek için geçtik

var Kullanici = mongoose.model('Kullanici', kullaniciSchema); //şemayla kullanıcı oluşturduk

module.exports = Kullanici; //kullanıcıyı export ettik