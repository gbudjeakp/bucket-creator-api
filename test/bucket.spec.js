const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Tasks API", () => {
  /**
   * Test the GET route
   */
  describe("GET /api/tasks", () => {
    it("should GET all the buckets in Linode", (done) => {
      chai
        .request(server)
        .get("/api/v1/view")
        .end((err, response) => {
            console.log(response.body)
          expect(response).to.have.status(200);
          expect(response.body.data).to.be.an("array");
          done();
        });
    }).timeout(20000);


    it("should GET 404", (done) => {
      chai
        .request(server)
        .get("/api/v1/test")
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });

  });
});
