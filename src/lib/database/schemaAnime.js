var mongoose = require('mongoose')
  , xport = require('../../xport')
  , SchemaTranslationLanguage = require('./schemaTranslationLanguage')
  ;

var SchemaAnime = mongoose.Schema({
    id: Number,
    type: Number,
    status: Number,
    titles: [SchemaTranslationLanguage],
    genres: [Number],
    airingStart: Number,
    airingEnd: Number,
    producers: [String],
    episodesReleased: Number,
    episodesTotal: Number,
    episodeDuration: Number,
    contentRating: Number,
    synopsis: [SchemaTranslationLanguage],
    adaptedType: Number,
    adaptedFrom: Number,
    related: [Number],
    sidestory: [Number],
    spinoff: [Number],
    parentType: Number,
    parentId: Number
});

/* Module Export */
xport(module, SchemaAnime);