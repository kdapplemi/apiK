'use strict';

var authenticateRepository = require('../repository/authenticateRepository');
var mongoose = require('mongoose'),
    Login = mongoose.model('Login');


exports.login = function(req, res) {
    var new_login = new Login(req.body);
    if (authenticateRepository.autenticate(new_login)) {
        var ret = authenticateRepository.authorize();
        var wordArr = authenticateRepository.generateToken(ret);
        console.log('token generated');
        //authenticateRepository.decodeBase64(wordArr);
        var decode = authenticateRepository.verifyToken(wordArr);
        res.json(wordArr);
        // res.json(authenticateRepository.decodeBase64(wordArr));
    } else {
        res.json('login failed');
    }
    // authenticateRepository.login(res);
};