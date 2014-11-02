var xport = require('../xport')
  , Database = require('./api/db')
  , Feed = require('./api/feed')
  ;

var api = (function() {
    function API() {}

    API.register = function(cafe, baseUrl) {
        var currentUrl = baseUrl + 'api/';

        Database.register(cafe, currentUrl);
        Feed.register(cafe, currentUrl);
    };

    return API;
})();

/* Export the module */
xport(module, api);