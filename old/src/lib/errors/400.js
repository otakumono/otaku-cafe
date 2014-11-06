var xport = require('node-xport')(module)
  ;

var error400 = function(options) {
    var options = (options || {});
    var body = options.body || {
        'status': '404',
        'error': 'Bad request'
    };

    return function(request, response, next) {
        if (response.body) {
            return next();
        }

        response.type('application/json');
        response.status(400).send(body);
    };
};

/* Export the module */
xport(error400);