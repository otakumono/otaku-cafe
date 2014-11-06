var xport = require('node-xport')(module)
  , mongoose = require('mongoose')
  , Translation = require('./schemaTranslation')
  ;

var SchemaContent = mongoose.Schema({
    id: Number,
    type: Number,
    status: Number,
    titles: [Translation],
    genres: [Number],
    releaseInitial: Number,
    releaseFinal: Number,
    producers: [Number],
    episodesReleased: Number,
    episodesTotal: Number,
    episodeDuration: Number,
    contentRating: Number,
    synopsis: [Translation],
    adaptedType: Number,
    adaptedFrom: Number,
    related: [Number],
    sidestory: [Number],
    spinoff: [Number],
    parentType: Number,
    parentId: Number
});

/* Module Export */
xport(SchemaContent);