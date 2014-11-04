var xport = require('node-xport')
  , makeAPI = require('../../../makeapi')
  ;

var news = (function() {
    function News() {}

    News.register = function(cafe, baseUrl) {
        
    };

    return News;
})();

/* Export the module */
xport(module, news);