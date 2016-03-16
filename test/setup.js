var express = require('express'),
    timer = require('./../index'),
    server,
    port = 8052,
    app = express();

before(function(next) {
    app.get('/hasHeader', timer(), testEndpoint);
    app.get('/noHeader', timer({ addHeader: false }), testEndpoint);
    app.get('/explicitHeader', timer({ addHeader: true }), testEndpoint);
    server = app.listen(port, function serverStartup() {
        console.log("Server Started on port", port);
        next();
    });
});

function testEndpoint(req, res) {
    setTimeout(function delayedresponse() {
        res.send("hello");
    });
}

after(function() {
    if (server) {
        server.close(function serverClosed() {
            console.log("Server Closed");
        });
    }
});
