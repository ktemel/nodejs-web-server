var express = require("express");
var app = express();
var PORT = process.env.PORT || 3030;
/*
app.get('/', function (req,res) {
	// body...
	res.send("Merhaba Express");
});
*/

var middleware = require('./middleware');

//Genel tanımlama
app.use(middleware.logger);

app.get('/hakkimda', middleware.requireAuthentication, function (req,res) {
	// body...
	res.send("Hakkımızda sayfası");
});

app.use(express.static(__dirname+'/public'));

app.listen(PORT, function(){

});