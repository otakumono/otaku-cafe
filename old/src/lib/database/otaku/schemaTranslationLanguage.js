var xport = require('node-xport')(module)
  , mongoose = require('mongoose')
  ;

var SchemaTranslationLanguage = mongoose.Schema({
    language: String,
    translations: [String]
});

/* Module Export */
xport(SchemaTranslationLanguage);