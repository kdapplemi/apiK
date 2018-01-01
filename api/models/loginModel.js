'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    }
});

var Login = module.exports = mongoose.model('Login', LoginSchema);