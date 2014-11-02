var mongoose = require('mongoose')
  , xport = require('../../xport')
  , SchemaCollectionInformation = require('./schemaCollectionInformation')
  ;

var ModelInfoAnime = mongoose.model('ModelInfoAnime', SchemaCollectionInformation, 'info_anime');

/* Module Export */
xport(module, ModelInfoAnime);