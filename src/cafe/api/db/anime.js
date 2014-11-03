var xport = require('../../../xport')
  , makeAPI = require('../../../makeapi')
  , AnimeType = require('../../../lib/database/animeType')
  , Database = require('../../../lib/database')
  , ModelAnime = require('../../../lib/database/modelAnime')
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
        Anime.internalLookup(id, function(error, result) {
            if (error) {
                return next(error);
            }

            response.type('application/json');
            response.send(result);
        });
    };

    Anime.lookupName = function(request, response, next) {
        var name = request.params.name;
        if (!name) {
            response.type('application/json');
            response.send({ id: 0 });
            return;
        }

        name = name.replace(/\+/g, ' ');

        Database.findRecordByName(ModelAnime, name, function(error, result) {
            if (error) {
                return next(error);
            }

            var queryResult = { id: 0 };

            if (result) {
                queryResult = result;
            }
            
            response.type('application/json');
            response.send(queryResult);
        });
    };

    Anime.searchName = function(request, response, next) {
        var name = request.params.name;
        if (!name) {
            response.type('application/json');
            response.send({ id: 0 });
            return;
        }

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

            response.type('application/json');
            response.send(queryResult);
        }, { type: AnimeType.TV });
    };

    Anime.internalLookup = function(id, callback) {
        Database.getRecord(ModelAnime, id, callback);
    };

    Anime.internalSearch = function(name, callback, params) {
        Database.findRecordByName(ModelAnime, name, function(error, result) {
            if (error) {
                return callback(error, result);
            }

            var queryResult = { id: 0 };
            if (result) {
                queryResult.id = result.id;
            }

            callback(error, queryResult);
        });
    };

    return Anime;
})();

/* Export the module */
xport(module, anime);