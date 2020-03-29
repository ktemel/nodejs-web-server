var express = require("express");
var app = express();
/*
app.get('/', function (req,res) {
	// body...
	res.send("Merhaba Express");
});
*/

var middleware = {
	requireAuthentication : function(req, res, next){
		console.log("Özel route");
		next();
	},
	logger : function(req, res, next){
		console.log("Özel route logger");
		next();
	},
}

//Genel tanımlama
app.use(middleware.logger);

app.get('/hakkimda', middleware.requireAuthentication, function (req,res) {
	// body...
	res.send("Hakkımızda sayfası");
});

app.use(express.static(__dirname+'/public'));

app.listen(3030, function(){

});