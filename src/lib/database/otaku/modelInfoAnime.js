var xport = require('node-xport')
  , mongoose = require('../../../connections').otaku
  , SchemaCollectionInformation = require('./schemaCollectionInformation')
  ;

var ModelInfoAnime = mongoose.model('ModelInfoAnime', SchemaCollectionInformation, 'info_anime');

/* Module Export */
xport(module, ModelInfoAnime);