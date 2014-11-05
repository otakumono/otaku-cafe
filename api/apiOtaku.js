var xport = require('node-xport')
  , APIOtakuDB = require('./otaku/db')
  , APIOtakuFeed = require('./otaku/feed')
  ;

function APIOtaku(baseUrl) {
    this.baseUrl = (baseUrl || '/') + 'otaku/';
    this.db = new APIOtakuDB(this.baseUrl);
    /*this.feed = new APIOtakuFeed(this.baseUrl);*/
}

APIOtaku.prototype.register = function(express) {
    this.db.register(express);
    /*ths.feed.register(express);*/
};

xport(module, APIOtaku);