var xport = require('node-xport')(module)
  , mongoose = require('mongoose')
  ;

var schemaUser = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    hashword: {
        type: String,
        required: true
    },
    passwordResetToken: {
        type: String,
        unique: true
    },
    resetTokenExpiration: Number,
    nameGiven: String,
    nameFamily: String
});

xport(schemaUser);