var xport = require('../xport')
  , models = require('./models')
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
        makeAPI.route(cafe, baseUrl, routes.index);
    };

    return Middleware;
})();

xport(module, middleware);