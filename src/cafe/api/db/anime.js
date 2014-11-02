var xport = require('../../../xport')
  , makeAPI = require('../../../makeapi')
  , AnimeType = require('../../../lib/database/animeType')
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
        response.type('application/json');

        var id = request.params.id;
        Anime.internalLookup(id, function(error, result) {
            if (error) {
                return next(error);
            }

            response.send(result);
        });
    };

    Anime.lookupName = function(request, response, next) {

    };

    Anime.searchName = function(request, response, next) {
        response.type('application/json');

        var name = request.params.name;
        Anime.internalSearch(name, function(error, result) {
            if (error) {
                return next(error);
            }

            var queryResult = {
                "query": {
                    "name": name
                },
                "result": result
            };

            response.send(queryResult);
        }, { type: AnimeType.TV });
    };

    Anime.internalLookup = function(id, callback) {

    };

    Anime.internalSearch = function(name, callback, params) {
        
    };

    return Anime;
})();

/* Export the module */
xport(module, anime);