var xport = require('./xport')
  , error = require('./lib/error')
  , config = require('./config')
  , express = require('express')
  , logger = require('morgan')
  , responseTime = require('response-time')
  , favicon = require('serve-favicon')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , makeAPI = require('./makeapi')
  , cafeAPI = require('./cafe/api')
  , dtype = require('./lib/dtype')
  , mongo = require('mongodb')
  , mongoose = require('mongoose')
  ;

var cafe = express();

if ('test' !== cafe.get('env')) {
    cafe.use(logger(config.get('logger:format')));
}

cafe.use(responseTime());
cafe.use(favicon('./public/favicon.ico'));
cafe.use(bodyParser.json());
cafe.use(bodyParser.urlencoded({ extended: false }));
cafe.use(cors());

cafe.use(function(request, response, next) {
    next();
});

cafeAPI.register(cafe, '/');

cafe.use(error.error404());

mongoose.connect('mongodb://' + config.get('database:host') + ':' + config.get('database:port') + '/' + config.get('database:name'));

var database = mongoose.connection;
database.on('error', function(error) {
    console.log(error + " while attempting to open the database, exiting.");
    process.exit(1);
});

database.once('open', function() {
    console.log("Connection to database established.");
});

var listener = cafe.listen(config.get('port'), function() {
    var boundAddress = listener.address();
    console.log('otaku-cafe listening on ' + boundAddress.address + ':' + boundAddress.port + '.');
});


/* Export the module */
xport(module, cafe);