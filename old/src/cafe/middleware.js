var xport = require('node-xport')(module)
  , models = require('../lib/database/oauth')
  , makeAPI = require('../makeapi')
  , routes = require('./routes')
  ;

var middleware = (function() {
    function Middleware() {}

    Middleware.requiresUser = function(request, response, next) {
        if (request.session.userId) {
            request.user = { id: request.session.userId };
            next();
        } else {
            response.app.oauth.authorise()(request, response, next);
        }
    };

    Middleware.loadUser = function(request, response, next) {
        models.User.findOne({ email: request.session.userId }, function(error, user) {
            if (error) {
                return next(error);
            }

            response.locals.user = user;
            next();
        });
    };

    Middleware.isValidationError = function(error) {
        return (error && error.name === 'ValidationError');
    };

    Middleware.NotFoundHandler = function(request, response, next) {
        response.status(404);
        response.format({
            html: function() {
                response.render('404', { url: request.url });
            },
            json: function() {
                response.send({ 'error': 'Not Found' });
            }
        });
    };

    Middleware.register = function(cafe, baseUrl) {
        var routeIndex = cafe.route(baseUrl);
        routeIndex.get(routes.index);

        var routeAuthorize = cafe.route(baseUrl + 'oauth/authorize');
        routeAuthorize.get(function(request, response, next) {
            if (!request.session.userId) {
                return response.redirect(
                    '/session?redirect=' + request.path +
                    '&clientId=' + request.query.clientId +
                    '&redirectUri=' + request.query.redirectUri
                    );
            }

            response.render('authorize', {
                'clientId': request.query.clientId,
                'redirectUri': request.query.redirectUri
            });
        });

        routeAuthorize.post(function(request, response, next) {
            if (!request.session.userId) {
                return response.redirect(
                    '/session?redirect=' + request.path +
                    '&clientId=' + request.query.clientId +
                    '&redirectUri=' + request.query.redirectUri
                    );
            }
        });
    };

    return Middleware;
})();

xport(middleware);