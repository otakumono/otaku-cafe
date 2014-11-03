var xport = require('../../xport')
  , mongoose = require('../../connections').otaku
  , SchemaAnime = require('./schemaAnime')
  ;

var ModelAnime = mongoose.model('ModelAnime', SchemaAnime, 'anime');

/* Module Export */
xport(module, ModelAnime);