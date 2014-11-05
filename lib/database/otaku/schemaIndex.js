var xport = require('node-xport')
  , mongoose = require('mongoose')
  ;

var SchemaIndex = mongoose.Schema({
    numEntries: Number,
    numType: [Number]
});

/* Module Export */
xport(module, SchemaIndex);