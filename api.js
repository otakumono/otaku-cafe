var xport = require('node-xport')(module)
  , APIOtaku = require('./api/apiOtaku')
  ;

function API(baseUrl) {
    this.baseUrl = (baseUrl || '/');
    this.otaku = new APIOtaku(baseUrl);
}

API.prototype.register = function(express) {
    this.otaku.register(express);
};

xport(API);