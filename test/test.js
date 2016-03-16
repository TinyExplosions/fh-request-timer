var supertest = require('supertest'),
    api = supertest('http://localhost:8052');

describe('fh-request-timer', function() {

    it('should return an x-fh-timer header in the response', function(done) {
        api.get('/hasHeader')
            .expect(function checkSuccessfulHeaders(res) {
                if (!('x-fh-timer' in res.headers)) {
                    throw new Error("missing x-fh-timer header");
                }
            })
            .expect(200)
            .end(done);
    });

    it('should not return an x-fh-timer header in the response', function(done) {
        api.get('/noHeader')
            .expect(function checkSuccessfulHeaders(res) {
                if (('x-fh-timer' in res.headers)) {
                    throw new Error("missing x-fh-timer header");
                }
            })
            .expect(200)
            .end(done);
    });

    it('should once again return an x-fh-timer header in the response', function(done) {
        api.get('/explicitHeader')
            .expect(function checkSuccessfulHeaders(res) {
                if (!('x-fh-timer' in res.headers)) {
                    throw new Error("missing x-fh-timer header");
                }
            })
            .expect(200)
            .end(done);
    });

});
