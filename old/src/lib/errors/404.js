var xport = require('node-xport')
  ;

var error404 = function(options) {
    var options = (options || {});
    var body = options.body || {
        'status': '404',
        'error': 'Script not found'
    };

    return function(request, response, next) {
        if (response.body) {
            return next();
        }

        response.type('application/json');
        response.status(404).send(body);
    };
};

/* Export the module */
xport(module, error404);