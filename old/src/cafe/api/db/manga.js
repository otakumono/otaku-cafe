var xport = require('node-xport')(module)
  , makeAPI = require('../../../makeapi')
  ;

var manga = (function() {
    function Manga() {}

    Manga.register = function(cafe, baseUrl) {
        
    };

    return Manga;
})();

/* Export the module */
xport(manga);