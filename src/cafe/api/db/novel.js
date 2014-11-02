var xport = require('../../../xport')
  , makeAPI = require('../../../makeapi')
  ;

var novel = (function() {
    function Novel() {}

    Novel.register = function(cafe, baseUrl) {
        
    };

    return Novel;
})();

/* Export the module */
xport(module, novel);