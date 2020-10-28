const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function createUser(user) {

    let newUser = await new User({
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        password: user.password,
    });
    return newUser;
}

async function hashPassword(password) {
    let genSalt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, genSalt);
    return hashedPassword;
}

async function errorHandler(error) {
    if ( error.code==11000 ) {
        return 'Email Already Exist!';
    }else{
        return error.message
    }
}

async function findOneUser(email) {
    try {
        let foundUser = await User.findOne({email});
        if (!foundUser) {
            return 404;
        }
        return foundUser;
    } catch (error) {
        return error;
    }
}

async function comparePassword(incomingPassword, userPassword) {
    try {

        let comparedPassword = await bcrypt.compare(incomingPassword, userPassword);
        if (comparedPassword) {
            return comparedPassword;
        } else {
            return 409;
        }

    } catch (error) {
        return error;
    }
}

async function createJwtToken(user) {
    let payload = {
        id: user._id,
        email: user.email,
    }
    let jwtToken = await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 3600});
    return jwtToken;
}

module.exports = {
    hashPassword,
    errorHandler,
    createUser,
    findOneUser,
    comparePassword,
    createJwtToken
}