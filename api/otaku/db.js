var dirLogic = '../../lib/logic/';
var dirOtaku = dirLogic + 'otaku/';

var xport = require('node-xport')
  , LogicAnime = require(dirOtaku + 'logicAnime')
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

            respond(response, result);
        });
    });

    routeName.get(function(request, response, next) {
        LogicAnime.lookup(request.params.name, function(error, result) {
            if (error) {
                return next(error);
            }

            respond(response, result);
        });
    });

    routeSearch.get(function(request, response, next) {
        LogicAnime.search(request.params.name, function(error, result) {
            if (error) {
                return next(error);
            }

            result.query = request.params.name; /* TODO: This doesn't appear to do anything. Fix it. */
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

}

function routeNovel(express, path) {
    var routeId = express.route(path + 'id/:id([0-9]+)');
    var routeName = express.route(path + 'name/:name');
    var routeSearch = express.route(path + 'search/:name');
    var routeStatisticsTotal = express.route(path + 'statistics/total');
    var routeStatisticsType = express.route(path + 'statistics/type/:type');
    
}

function respond(response, result) {
    response.type('application/json');
    response.send(result);
}

xport(module, APIOtakuDB);