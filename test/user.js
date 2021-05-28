//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const UserModel = require('../models/user');


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Users', () => {
  after((done) => { //After each test we empty the database
    UserModel.deleteMany({}, (err) => {
      done();
    });
  });

  /*
 * Test the /POST route
 */
  describe('/POST user', () => {
    it('it should POST the user', (done) => {
      let user = {
        email: "test@gmail.com",
        password: "123456",
      }
      chai.request(server)
        .post('/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.should.have.status(200);
          done();
        });
    });

  });

  describe('/POST user', () => {
    it('it should not POST the user due to conflict', (done) => {
      let user = {
        email: "test@gmail.com",
        password: "123456",
      }
      chai.request(server)
        .post('/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(409);
          done();
        });
    });

  });

  describe('/POST user', () => {
    it('it should not POST the user due to schema validation', (done) => {
      let user = {
        email: "kaka@gmail.com",
      }
      chai.request(server)
        .post('/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

  });


  describe('/POST login', () => {
    it('it should return Token for login', (done) => {
      let user = {
        email: "test@gmail.com",
        password: "123456",
      }
      chai.request(server)
        .post('/users/auth')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

  });

  describe('/POST login', () => {
    it('it should not login with invalid credentials', (done) => {
      let user = {
        "email": "moselfllftts9@gmail.com",
        "password": "helloooyr"
      }
      chai.request(server)
        .post('/users/auth')
        .send(user)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a('object');
          done();
        });
    });

  });

  describe('/POST login', () => {
    it('it should not login with invalid schema', (done) => {
      let user = {
        "password": "helloooyr"
      }
      chai.request(server)
        .post('/users/auth')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

  });
})