fh-request-timer
========================

A simple request timer middleware for express apps that logs request time to the
Red Hat Mobile Application Platform, as well as adding an `x-fh-timer` header to
each response.

Implementation
--------------

``` javascript
// require module
var reqTimer = require('fh-request-timer');

// include timer middleware
app.use(reqTimer);
```

Run Unit Tests
--------------

``` shell
npm install
npm test
```