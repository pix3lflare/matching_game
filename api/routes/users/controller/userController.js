const {
  createUser,
  hashPassword,
  errorHandler,
  findOneUser,
  comparePassword,
  createJwtToken,
} = require('./authHelper');
var AWS = require("aws-sdk");

module.exports = {
  uploadImage: async (req, res) => {

    let s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
    let bucketName = 'afi-website-bucket'
    let keyName = 's3_test_9.jpg'//req.files.imgFile2.name

    var objectParams = {
        Bucket: bucketName,
        Key: keyName,
        Body: req.files.imgFile.data,
        ACL: 'public-read'
    };

    var uploadPromise = await s3.putObject(objectParams).promise();

    res.status(200).json({
      message: 'Upload Complete',
      url: `https://${bucketName}.s3.amazonaws.com/${keyName}`
    });
  },

  register: async (req, res) => {
    try {
      let newUser = await createUser(req.body);
      let hashedPassword = await hashPassword(newUser.password);
      newUser.password = hashedPassword;
      let savedUser = await newUser.save();
      res.status(200).json({
        message: 'Successfully signed up',
      });
    } catch (error) {
      let errorMessage = await errorHandler(error);
      res.status(409).json({
        message: errorMessage,
      });
    }
  },

  login: async (req, res) => {
    try {
      let foundUser = await findOneUser(req.body.email);

      if (foundUser === 404) {
        throw {
          status: 500,
          message: 'User not found, please sign up',
        };
      }
      let comparedPassword = await comparePassword(
        req.body.password,
        foundUser.password
      );
      if (comparedPassword === 409) {
        throw {
          status: 409,
          message: 'Check your email and password',
        };
      }

      let jwtToken = await createJwtToken(foundUser);
      res.status(200).json({
        token: jwtToken,
      });
    } catch (error) {
      res.status(error.status).json({
        message: error.message,
      });
    }
  },
};
