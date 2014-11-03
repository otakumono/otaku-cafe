var xport = require('../../xport')
  ;

var routes = (function() {
    function Routes() {}

    Routes.index = function(request, response) {
        response.render('index');
    };

    Routes.session = require('./session');
    Routes.users = require('./users');

    return Routes;
})();

xport(module, routes);