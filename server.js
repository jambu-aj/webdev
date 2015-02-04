var express = require('express'); //telling Node JS that we want to use the Express.JS framework to run server
var app = express();

app.use('/thegoodword', function(request, response){ // routes to this subdirectory
	response.write("TO HELL WITH GEORGIA!!!"); //server's response to this subdirectory
	response.end();
})

app.use(express.static('public')); //the static directory will route to 'public' 

app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), function() {//using local port 3000 to host site
	console.log("Site is served on port 3000")
})

//Used NPM to install node.js tools from 3rd parties to 