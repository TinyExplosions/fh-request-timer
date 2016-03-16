var supertest = require('supertest'),
    api = supertest('http://localhost:8052');

describe('fh-request-timer', function() {

    it('should return an x-fh-timer header in the response', function(done) {
        api.get('/test')
            .expect(function checkSuccessfulHeaders(res) {
                if (!('x-fh-timer' in res.headers)) {
                    throw new Error("missing x-fh-timer header");
                }
            })
            .expect(200)
            .end(done);
    });

});
