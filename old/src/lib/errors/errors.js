var xport = require('node-xport')
  , error404 = require('./404')
  , error400 = require('./400')
  , util = require('util')
  ;

var errors = (function() {
    function Errors() {}

    Errors.error404 = error404;
    Errors.error400 = error400;

    Errors.notFound = function(message) {
        if (!message) {
            message = "not found";
        }

        this.code = 404;
        this.message = message;

        Error.call(this);
    };

    Errors.badRequest = function(message) {
        if (!message) {
            message = "not found";
        }

        this.code = 400;
        this.message = message;

        Error.call(this);
    };

    Errors.validationError = function(message, path) {
        if (!message) {
            message = "not found";
        }

        this.code = 400;
        this.message = message;
        this.errors = {};

        this.errors[path] = {
            'message': message,
            'name': 'ValidatorError',
            'path': path,
            'type': 'user defined'
        };

        Error.call(this);
    };

    util.inherits(Errors.notFound, Error);
    util.inherits(Errors.badRequest, Error);
    util.inherits(Errors.validationError, Error);

    return Errors;
})();

/* Export the module */
xport(module, errors);