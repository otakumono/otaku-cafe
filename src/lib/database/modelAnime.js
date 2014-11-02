var mongoose = require('mongoose')
  , xport = require('../../xport')
  , SchemaAnime = require('./schemaAnime')
  ;

var ModelAnime = mongoose.model('ModelAnime', SchemaAnime, 'anime');

/* Module Export */
xport(module, ModelAnime);