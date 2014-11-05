var xport = require('node-xport')
  , mongoose = require('mongoose')
  ;

var SchemaCollectionInformation = mongoose.Schema({
    numEntries: Number,
    numType: [Number]
});

/* Module Export */
xport(module, SchemaCollectionInformation);