var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

router.post('/test-post/', function(req, res, next) {

    res.send('postman test: ' +  req.body.name);
});

module.exports = router;