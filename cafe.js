var Config = require('./lib/config');

var config = Config('otaku.cafe.json');
config.parse();
config.save();

var fs = require('fs');
var sslKey = fs.readFileSync('./security/localkey.pem');
var sslCert = fs.readFileSync('./security/localcert.pem');

var sslOptions = {
  key: sslKey,
  cert: sslCert
};

var xport = require('node-xport')(module)
  , express = require('express')
  , logger = require('morgan')
  , https = require('https')
  , http = require('http')
  , responseTime = require('response-time')
  , favicon = require('serve-favicon')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , cookieSession = require('cookie-session')
  , methodOverride = require('method-override')
  , path = require('path')
  , cors = require('cors')
  , Datatype = require('./lib/datatype')
  , Database = require('./lib/database')
  , HTTPError = require('./lib/httperror')
  , API = require('./api')
  , Logic = require('./lib/logic')
  ;

Database.initialize(config.get('database'));
Database.connect();
Logic.initialize();

var api = new API('/');
var server = express();

if ('test' !== server.get('env')) {
    server.use(logger(config.get('logger:format')));
}

server.set('json spaces', 2);
server.set('view engine', 'jade');
server.set('views', path.join(__dirname, 'views'));

server.use(responseTime());
server.use(favicon('./public/favicon.ico'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(methodOverride());
server.use(cors());
server.use(cookieParser(config.get('session:secret')));
server.use(cookieSession({ secret: config.get('session:secret') }));

server.use(function(request, response, next) {
    console.log("request received");
    if (!request.secure) {
      console.log('https://' + request.hostname + ':' + config.get('server:port') + request.url);
        return response.redirect('https://' + request.hostname + ':' + config.get('server:port') + request.url);
    }

    next();
});

api.register(server);

server.use(HTTPError(400, 'Bad request.').handle);

var secureInstance = https.createServer(sslOptions, server);
var secureListener = secureInstance.listen(config.get('server:port'), config.get('server:host'), 511, function() {
    var boundAddress = secureListener.address();
    console.log('otaku-cafe listening on ' + boundAddress.address + ':' + boundAddress.port + '.');
});

var unsecureInstance = http.createServer(server);
var unsecureListener = unsecureInstance.listen(config.get('server:unsecure-port'), config.get('server:host'), 511, function() {
    var boundAddress = unsecureListener.address();
    console.log('otaku-cafe redirecting on ' + boundAddress.address + ':' + boundAddress.port + '.');
});

/* Export the module */
xport(server);