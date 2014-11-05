var xport = require('node-xport')
  , mongoose = require('mongoose')
  ;

var SchemaTranslation = mongoose.Schema({
    language: String,
    translations: [String]
});

/* Module Export */
xport(module, SchemaTranslation);