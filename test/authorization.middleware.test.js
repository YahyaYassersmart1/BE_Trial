const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const User = require('../src/api/users/user.model');
const AuthService = require('../src/api/users/auth.service');

chai.should();
chai.use(chaiHttp);

describe('Authorization Middleware', () => {

    let token;

    beforeEach(async () => {
        await User.deleteMany({});

        const password = 'password123';
        const hashedPassword = await AuthService.hashPassword(password);

        const user = new User({
            fullName: 'John Doe',
            email: 'john@example.com',
            password: hashedPassword,
            role: 'Admin'
        });

        await user.save();

        token = AuthService.generateToken(user);
    });

    describe('/GET protected-route', () => {
        it('it should allow access for authorized user', (done) => {
            chai.request(server)
                .get('/protected-route')
                .set('Authorization', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('string');
                    res.body.should.be.eql('This is a protected route');
                    done();
                });
        });

        it('it should deny access for unauthorized user', (done) => {
            chai.request(server)
                .get('/protected-route')
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.be.a('string');
                    res.body.should.be.eql('Access Denied');
                    done();
                });
        });
    });

});
