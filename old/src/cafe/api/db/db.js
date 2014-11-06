var xport = require('node-xport')(module)
  , Anime = require('./anime')
  , AnimeChart = require('./animeChart')
  , Manga = require('./manga')
  , Novel = require('./novel')
  ;

var db = (function() {
    function Database() {}

    Database.register = function(cafe, baseUrl) {
        var currentUrl = baseUrl + 'db/';

        Anime.register(cafe, currentUrl);
        AnimeChart.register(cafe, currentUrl);
        Manga.register(cafe, currentUrl);
        Novel.register(cafe, currentUrl);
    };

    return Database;
})();

/* Export the module */
xport(db);