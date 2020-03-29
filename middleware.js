var  middleware = {
	requireAuthentication : function(req, res, next){
		console.log("Özel route");
		next();
	},
	logger : function(req, res, next){
		console.log("Özel route logger");
		next();
	},
}

module.exports =middleware;