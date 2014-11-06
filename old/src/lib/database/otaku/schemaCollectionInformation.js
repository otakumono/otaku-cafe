var xport = require('node-xport')(module)
  , mongoose = require('mongoose')
  ;

var SchemaCollectionInformation = mongoose.Schema({
    numEntries: Number,
    numType: [Number]
});

/* Module Export */
xport(SchemaCollectionInformation);