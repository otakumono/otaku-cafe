var xport = require('node-xport')(module)
  , makeAPI = require('../../../makeapi')
  ;

var news = (function() {
    function News() {}

    News.register = function(cafe, baseUrl) {
        
    };

    return News;
})();

/* Export the module */
xport(news);