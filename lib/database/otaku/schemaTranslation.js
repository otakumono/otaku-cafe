var xport = require('node-xport')(module)
  , mongoose = require('mongoose')
  ;

var SchemaTranslation = mongoose.Schema({
    language: String,
    translations: [String]
});

/* Module Export */
xport(SchemaTranslation);