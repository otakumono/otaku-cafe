var xport = require('node-xport')(module)
  , Database = require('./db')
  , Feed = require('./feed')
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
xport(api);