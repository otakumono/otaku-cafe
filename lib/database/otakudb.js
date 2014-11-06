var xport = require('node-xport')(module)
  , CommonDB = require('./commondb')
  , SchemaCache = require('./otaku/schemaCache')
  , SchemaContent = require('./otaku/schemaContent')
  , SchemaIndex = require('./otaku/schemaIndex')
  ;

function OtakuDB(options) {
    this.options = CommonDB.cleanOptions(options, 'otaku-data');
    
    this.connection = null;
    
    this.modelAnime = null;
    this.modelIndexAnime = null;

    this.modelManga = null;
    this.modelIndexManga = null;
    
    this.modelNovel = null;
    this.modelIndexNovel = null;

    OtakuDB.database = this;
}

OtakuDB.database = null;

OtakuDB.prototype.connectionString = function() {
    return CommonDB.connectionString(this);
};

OtakuDB.prototype.connect = function() {
    CommonDB.connect(this);

    var db = this.connection;
    
    this.modelAnime = db.model('modelAnime', SchemaContent, 'anime');
    this.modelIndexAnime = db.model('modelIndexAnime', SchemaIndex, 'index_anime');

    this.modelManga = db.model('modelManga', SchemaContent, 'manga');
    this.modelIndexManga = db.model('modelIndexManga', SchemaIndex, 'index_manga');
    
    this.modelNovel = db.model('modelNovel', SchemaContent, 'novel');
    this.modelIndexNovel = db.model('modelIndexNovel', SchemaIndex, 'index_novel');
};

OtakuDB.prototype.disconnect = function(callback) {
    return CommonDB.disconnect(OtakuDB.database, callback);
}

OtakuDB.prototype.onError = function(error) {
    return CommonDB.onError(OtakuDB.database, error);
};

OtakuDB.prototype.onOpen = function() {
    return CommonDB.onOpen(OtakuDB.database);
};

OtakuDB.prototype.onClose = function() {
    return CommonDB.onClose(OtakuDB.database);
};

xport(OtakuDB);