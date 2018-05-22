import supertest from 'supertest';
import {app} from './../index.js';
import should from 'should'; // eslint-disable-line


describe('Members API unit test', function() {
this.timeout(140000);
it('should return collection of JSON documents', function(done) {
  supertest(app)
  .get('/api/members')
  .expect('Content-type', /json/)
  .expect(200)
  .end(function(err, res) {

      res.status.should.equal(200);
      done();
  });
});
});



 // add a Member
  it('should add a member', function(done) {

    this.timeout(140000);
    // post to /api/members
    supertest(app)
    .post('/api/members')

    .set('Authorization', 'BEARER eyJhbGciOiJIUzI1NiJ9.bHVrZQ.3Z7oJqnzDO1qGwvCb9HJL9oRe1mqxgepHlUQUjn9cuY')

    .send({ name: 'Darragh Hendrick', address: 'Tombrack',
    dob: '19/12/1988',
    phoneNumber: '0862677352',})
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      res.status.should.equal(201);
      res.body.should.have.property('_id');
      res.body.name.should.equal('Darragh Hendrick');
      done();
    });
  });



// update a member
it('should update a member', function(done) {
    this.timeout(140000);
    const superserver = supertest(app);
    superserver
    .get('/api/members')
    .set('Authorization', 'BEARER eyJhbGciOiJIUzI1NiJ9.bHVrZQ.3Z7oJqnzDO1qGwvCb9HJL9oRe1mqxgepHlUQUjn9cuY')
    .expect('Content-type', /json/)
    .expect(200)
    .expect('Content-type', /json/)
    .expect(200) // This is HTTP response
    .end(function(err, res) {
        const id = res.body[0]._id;
        superserver
	.put('/api/members/'+id)
	.send({address: 'Kilrush'})
	.expect('Content-type', /json/)
    	.expect(201)
    	.end(function(err, res) {
    	 res.status.should.equal(201);
     	 res.body.address.should.equal('Kilrush');
     	 done();
     });
            }
          );
     });




  // delete a member
  it('should delete a member', function(done) {
    this.timeout(140000);
    const superserver = supertest(app);
    superserver
    .get('/api/members')
    .set('Authorization', 'BEARER eyJhbGciOiJIUzI1NiJ9.bHVrZQ.3Z7oJqnzDO1qGwvCb9HJL9oRe1mqxgepHlUQUjn9cuY')
    .expect('Content-type', /json/)
    .expect(200)
    .expect('Content-type', /json/)
    .expect(200) // This is HTTP response
    .end(function(err, res) {
        const id = res.body[0]._id;
        superserver
            .delete('/api/members/'+id)
            .expect('Content-type', /json/)
            .expect(200)
            .expect(200) // This is HTTP response
            .end(function(err, res) {
              res.status.should.equal(204);
              done();
            });

            }
          );
     });
