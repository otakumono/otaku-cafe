var xport = require('node-xport')(module)
  , mongoose = require('mongoose')
  ;

var SchemaIndex = mongoose.Schema({
    numEntries: Number,
    numType: [Number]
});

/* Module Export */
xport(SchemaIndex);