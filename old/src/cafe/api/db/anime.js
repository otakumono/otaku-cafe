var xport = require('node-xport')(module)
  , makeAPI = require('../../../makeapi')
  , Database = require('../../../lib/database/otaku')
  , AnimeType = require('../../../lib/database/otaku/animeType')
  , ModelAnime = require('../../../lib/database/otaku/modelAnime')
  ;

var anime = (function() {
    function Anime() {}

    Anime.register = function(cafe, baseUrl) {
        var currentUrl = baseUrl + 'anime/';

        makeAPI.route(cafe, currentUrl + 'id/:id([0-9]+)', Anime.lookupID);
        makeAPI.route(cafe, currentUrl + 'name/:name', Anime.lookupName);
        makeAPI.route(cafe, currentUrl + 'search/:name', Anime.searchName);
    };

    Anime.lookupID = function(request, response, next) {
        var id = request.params.id;
        
        Database.get(ModelAnime, id, function(error, result) {
            if (error) {
                return next(error);
            }

            response.type('application/json');
            response.send(result);
        });
    };

    Anime.lookupName = function(request, response, next) {
        Anime.internalLookupName(request, response, next, function(error, result) {
            if (error) {
                return next(error);
            }

            response.type('application/json');
            response.send(result);
        });
    };

    Anime.searchName = function(request, response, next) {
        Anime.internalLookupName(request, response, next, function(error, result) {
            if (error) {
                return next(error);
            }

            response.type('application/json');
            response.send({
                "query": request.params.name,
                "result": (result ? result.id : -1)
            });
        });
    };

    Anime.internalLookupName = function(request, response, next, dbCallback) {
        var name = request.params.name;
        if (!name) {
            response.type('application/json');
            response.send({ id: -1 });
            return;
        }

        name = name.replace(/\+/g, ' ');

        Database.findByName(ModelAnime, name, dbCallback);
    };

    return Anime;
})();

/* Export the module */
xport(anime);