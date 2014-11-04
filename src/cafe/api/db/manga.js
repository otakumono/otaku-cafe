var xport = require('node-xport')
  , makeAPI = require('../../../makeapi')
  ;

var manga = (function() {
    function Manga() {}

    Manga.register = function(cafe, baseUrl) {
        
    };

    return Manga;
})();

/* Export the module */
xport(module, manga);