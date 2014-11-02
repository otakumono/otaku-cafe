var mongoose = require('mongoose')
  , xport = require('../../xport')
  ;

var SchemaTranslationLanguage = mongoose.Schema({
    language: String,
    translations: [String]
});

/* Module Export */
xport(module, SchemaTranslationLanguage);