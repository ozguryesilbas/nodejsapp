var path = require('path');

module.exports.index = function(req,res){
    res.sendfile(path.join(__dirname, 'index.html'));
};

module.exports.login = function(req,res){
    res.sendfile(path.join(__dirname, 'login.html'));
};
