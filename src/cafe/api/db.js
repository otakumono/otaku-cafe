var xport = require('../../xport')
  , Anime = require('./db/anime')
  , AnimeChart = require('./db/animeChart')
  , Manga = require('./db/manga')
  , Novel = require('./db/novel')
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
xport(module, db);