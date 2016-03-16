fh-request-timer
========================

A simple request timer middleware for express apps that logs request time to the
Red Hat Mobile Application Platform, as well as adding an optional `x-fh-timer` header to
each response.

Implementation
--------------

``` javascript
// require module
var reqTimer = require('fh-request-timer');

// include timer middleware
app.use(reqTimer());
```

Configuration
--------------

To remove the `x-fh-timer` from the response, pass the option `{addHeader:false}`
when calling the middleware:

``` javascript
// include timer middleware
app.use(reqTimer({addHeader: false}));
```


Run Unit Tests
--------------

``` shell
npm install
npm test
```