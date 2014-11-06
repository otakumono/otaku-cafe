var xport = require('node-xport')(module)
  , makeAPI = require('../../../makeapi')
  ;

var novel = (function() {
    function Novel() {}

    Novel.register = function(cafe, baseUrl) {
        
    };

    return Novel;
})();

/* Export the module */
xport(novel);