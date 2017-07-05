var express = require('express'),
    path = require('path'),
    http = require('http');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 5001);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/',function(req,res){  
        res.sendFile(__dirname + "public/home.html");  
    });

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
