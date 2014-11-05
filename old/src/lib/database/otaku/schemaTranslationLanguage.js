var xport = require('node-xport')
  , mongoose = require('mongoose')
  ;

var SchemaTranslationLanguage = mongoose.Schema({
    language: String,
    translations: [String]
});

/* Module Export */
xport(module, SchemaTranslationLanguage);