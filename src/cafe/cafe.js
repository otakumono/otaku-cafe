var xport = require('../xport')
  , error = require('../lib/errors')
  , config = require('../config')
  , express = require('express')
  , logger = require('morgan')
  , responseTime = require('response-time')
  , favicon = require('serve-favicon')
  , bodyParser = require('body-parser')
  , path = require('path')
  , cors = require('cors')
  , makeAPI = require('../makeapi')
  , cafeAPI = require('./api')
  , dtype = require('../lib/dtype')
  , mongo = require('mongodb')
  , database = require('../connections')
  , oauthserver = require('node-oauth2-server')
  , cookieParser = require('cookie-parser')
  , cookieSession = require('cookie-session')
  , methodOverride = require('method-override')
  , models = require('./models')
  , middleware = require('./middleware')
  ;

var cafe = express();

if ('test' !== cafe.get('env')) {
    cafe.use(logger(config.get('logger:format')));
}

cafe.set('json spaces', 2);
cafe.set('view engine', 'jade');
cafe.set('views', path.join(__dirname, 'views'));

cafe.use(responseTime());
cafe.use(favicon('./public/favicon.ico'));
cafe.use(bodyParser.json());
cafe.use(bodyParser.urlencoded({ extended: false }));
cafe.use(methodOverride());

cafe.use(cors());

cafe.use(cookieParser(config.get('session:secret')));
cafe.use(cookieSession({ secret: config.get('session:secret') }));

cafe.oauth = oauthserver({
  model: models.oauth,
  grants: config.get('oath:server:grants'),
  debug: config.get('oauth:server:debug')
});

cafe.use(function(error, request, response, next) {
    if (process.env.NODE_ENV !== 'test') {
        console.error('Error:', error);
    }

    if (middleware.isValidationError(error)) {
        response.status(400);
        response.send(error.errors);
    } else {
        repsonse.status(error.code || 500);
        response.send('Error');
    }
});

cafe.use(function(request, response, next) {
    next();
});

middleware.register(cafe, '/');

cafeAPI.register(cafe, '/');

cafe.all('/oauth/token', cafe.oauth.grant());

cafe.get('/', cafe.oauth.authorise(), function (request, response) {
  response.send('Authorized');
});

cafe.use(cafe.oauth.errorHandler());

cafe.use(error.error404());

var listener = cafe.listen(config.get('port'), function() {
    var boundAddress = listener.address();
    console.log('otaku-cafe listening on ' + boundAddress.address + ':' + boundAddress.port + '.');
});


/* Export the module */
xport(module, cafe);