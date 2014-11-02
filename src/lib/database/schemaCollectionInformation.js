var mongoose = require('mongoose')
  , xport = require('../../xport')
  ;

var SchemaCollectionInformation = mongoose.Schema({
    numEntries: Number,
    numType: [Number]
});

/* Module Export */
xport(module, SchemaCollectionInformation);