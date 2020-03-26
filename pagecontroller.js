var path = require('path');

module.exports.index = function(req,res){
    //middleware kullanarak eklediğimiz parametreyi burda alabiliriz
    console.log(req.deneme);
    res.sendfile(path.join(__dirname, 'index.html'));
};

module.exports.login = function(req,res){
    res.sendfile(path.join(__dirname, 'login.html'));
};

module.exports.deneme = function(req,res){
    res.render('deneme');
};
