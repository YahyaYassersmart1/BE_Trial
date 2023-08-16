const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const User = require('../src/api/users/user.model');
const AuthService = require('../src/api/users/auth.service');

chai.should();
chai.use(chaiHttp);

describe('Authentication Controller', () => {

    beforeEach(async () => {
        // Before each test we empty the database
        await User.deleteMany({});
    });

    describe('/POST register', () => {
        it('it should register a new user', (done) => {
            const user = {
                fullName: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
                role: 'User'
            };

            chai.request(server)
                .post('/auth/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('string');
                    res.body.should.be.eql('User Registered');
                    done();
                });
        });
    });

    describe('/POST login', () => {
        it('it should log in a user and return a token', async () => {
            const password = 'password123';
            const hashedPassword = await AuthService.hashPassword(password);

            const user = new User({
                fullName: 'John Doe',
                email: 'john@example.com',
                password: hashedPassword,
                role: 'User'
            });

            await user.save();

            const res = await chai.request(server)
                .post('/auth/login')
                .send({ email: 'john@example.com', password: 'password123' });

            res.should.have.status(200);
            res.header.should.have.property('authorization');
        });

        it('it should not log in a user with incorrect credentials', (done) => {
            chai.request(server)
                .post('/auth/login')
                .send({ email: 'john@example.com', password: 'wrongpassword' })
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('string');
                    res.body.should.be.eql('Email or password is wrong');
                    done();
                });
        });
    });

});
