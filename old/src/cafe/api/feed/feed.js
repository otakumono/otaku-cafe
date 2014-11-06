var xport = require('node-xport')(module)
  , News = require('./news')
  ;

var feed = (function() {
    function Feed() {}

    Feed.register = function(cafe, baseUrl) {
        var currentUrl = baseUrl + 'feed/';

        News.register(cafe, currentUrl);
    };

    return Feed;
})();

/* Export the module */
xport(feed);