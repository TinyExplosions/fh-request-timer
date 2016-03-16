var express = require('express'),
    timer = require('./../index'),
    server,
    port = 8052,
    app = express();

before(function(next) {
    app.use(timer);
    app.get('/test', function testEndpoint(req,res){
      console.log("I am a test endpoint that will return a response soon");
      setTimeout(function delayedresponse(){
        res.send("hello");
      });
    });
    server = app.listen(port, function serverStartup() {
        console.log("Server Started on port", port);
        next();
    });
});

after(function() {
    if (server) {
        server.close(function serverClosed() {
            console.log("Server Closed");
        });
    }
});
