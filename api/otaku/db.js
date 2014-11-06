var dirLogic = '../../lib/logic/';
var dirOtaku = dirLogic + 'otaku/';

var xport = require('node-xport')(module)
  , LogicAnime = require(dirOtaku + 'logicAnime')
  , LogicManga = require(dirOtaku + 'logicManga')
  , LogicNovel = require(dirOtaku + 'logicNovel')
  ;

function APIOtakuDB(baseUrl) {
    this.baseUrl = (baseUrl || '/') + 'db/';
}

APIOtakuDB.prototype.register = function(express) {
    var path = this.baseUrl;

    routeAnime(express, path + 'anime/');
    routeManga(express, path + 'manga/');
    routeNovel(express, path + 'novel/');
};

function routeAnime(express, path) {
    var routeId = express.route(path + 'id/:id([0-9]+)');
    var routeName = express.route(path + 'name/:name');
    var routeSearch = express.route(path + 'search/:name');
    var routeStatisticsTotal = express.route(path + 'statistics/total');
    var routeStatisticsType = express.route(path + 'statistics/type/:type');

    routeId.get(function(request, response, next) {
        LogicAnime.retrieve(request.params.id, function(error, result) {
            if (error) {
                return next(error);
            }

            result = (result ? (result._doc || result) : {});
            respond(response, result);
        });
    });

    routeName.get(function(request, response, next) {
        LogicAnime.lookup(request.params.name, function(error, result) {
            if (error) {
                return next(error);
            }
            
            result = (result ? (result._doc || result) : {});
            respond(response, result);
        });
    });

    routeSearch.get(function(request, response, next) {
        LogicAnime.search(request.params.name, function(error, result) {
            if (error) {
                return next(error);
            }
            
            result = (result ? (result._doc || result) : {});
            result.request = {
                'params': request.params,
                'query': request.query
            };
            respond(response, result);
        });
    });
}

function routeManga(express, path) {
    var routeId = express.route(path + 'id/:id([0-9]+)');
    var routeName = express.route(path + 'name/:name');
    var routeSearch = express.route(path + 'search/:name');
    var routeStatisticsTotal = express.route(path + 'statistics/total');
    var routeStatisticsType = express.route(path + 'statistics/type/:type');

    routeId.get(function(request, response, next) {
        LogicManga.retrieve(request.params.id, function(error, result) {
            if (error) {
                return next(error);
            }

            result = (result ? (result._doc || result) : {});
            respond(response, result);
        });
    });

    routeName.get(function(request, response, next) {
        LogicManga.lookup(request.params.name, function(error, result) {
            if (error) {
                return next(error);
            }

            result = (result ? (result._doc || result) : {});
            respond(response, result);
        });
    });

    routeSearch.get(function(request, response, next) {
        LogicManga.search(request.params.name, function(error, result) {
            if (error) {
                return next(error);
            }
            
            result = (result ? (result._doc || result) : {});
            result.request = {
                'params': request.params,
                'query': request.query
            };
            respond(response, result);
        });
    });
}

function routeNovel(express, path) {
    var routeId = express.route(path + 'id/:id([0-9]+)');
    var routeName = express.route(path + 'name/:name');
    var routeSearch = express.route(path + 'search/:name');
    var routeStatisticsTotal = express.route(path + 'statistics/total');
    var routeStatisticsType = express.route(path + 'statistics/type/:type');

    routeId.get(function(request, response, next) {
        LogicNovel.retrieve(request.params.id, function(error, result) {
            if (error) {
                return next(error);
            }

            result = (result ? (result._doc || result) : {});
            respond(response, result);
        });
    });

    routeName.get(function(request, response, next) {
        LogicNovel.lookup(request.params.name, function(error, result) {
            if (error) {
                return next(error);
            }

            result = (result ? (result._doc || result) : {});
            respond(response, result);
        });
    });

    routeSearch.get(function(request, response, next) {
        LogicNovel.search(request.params.name, function(error, result) {
            if (error) {
                return next(error);
            }
            
            result = (result ? (result._doc || result) : {});
            result.request = {
                'params': request.params,
                'query': request.query
            };
            respond(response, result);
        });
    });
}

function respond(response, result) {
    response.type('application/json');
    response.send(result);
}

xport(APIOtakuDB);