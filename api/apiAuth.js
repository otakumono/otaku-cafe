var xport = require('node-xport')(module)
  ;

function APIAuth(baseUrl) {
    this.baseUrl = (baseUrl || '/') + 'auth/';
    /*this.db = new APIOtakuDB(this.baseUrl);*/
    /*this.feed = new APIOtakuFeed(this.baseUrl);*/
}

APIAuth.prototype.register = function(express) {
    /*this.db.register(express);*/
    /*ths.feed.register(express);*/
};

xport(APIAuth);