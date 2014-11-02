var xport = require('../../xport')
  ;

var error404 = function(options) {
    var options = (options || {});
    var body = options.body || {
        'status': '404',
        'error': 'Script not found'
    };

    return function(request, result, next) {
        if (result.body) {
            return next();
        }

        result.status(404).send(body);
    };
};

/* Export the module */
xport(module, error404);