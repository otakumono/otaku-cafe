var xport = require('node-xport')(module)
  , mongoose = require('../../../connections').otaku
  , SchemaCollectionInformation = require('./schemaCollectionInformation')
  ;

var ModelInfoAnime = mongoose.model('ModelInfoAnime', SchemaCollectionInformation, 'info_anime');

/* Module Export */
xport(ModelInfoAnime);