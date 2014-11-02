var xport = require('../xport')
  , error404 = require('./error/404')
  ;

var error = (function() {
    function Error() {}

    Error.error404 = error404;

    return Error;
})();

/* Export the module */
xport(module, error);