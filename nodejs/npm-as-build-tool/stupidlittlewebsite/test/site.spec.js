var app = require("../");
var request = require("supertest").agent(app.listen());

describe("Our amazing site", function() {
    it("has a nice welcome msg", function(done) {
        request
            .get("/")
            .expect("Koa says Hi!")
            .end(done);
    });
});