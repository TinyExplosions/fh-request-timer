var $fh = require('fh-mbaas-api'),
    onHeaders = require('on-headers');

exports = module.exports = fhRequestTimer;

function fhRequestTimer(options) {
    var addHeader = !(options && options.addHeader === false) && true;

    return function fhRequestTimer(req, res, next) {

        var startTime = process.hrtime(),
            reqPath = req.path;

        onHeaders(res, function getRequestTime() {
            var diff = process.hrtime(startTime);
            var time = (diff[0] * 1e9 + diff[1]) / 1e6;

            $fh.stats.timing(reqPath, time);
            if (addHeader) {
                res.header("x-fh-timer", time + "ms");
            }

        });
        next();

    }
}
