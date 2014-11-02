var xport = require('./xport')
  ;

var makeAPI = (function() {
    function MakeAPI() {}

    MakeAPI.route = function(express, url, func, version, post, put, del) {
        if (isNaN(version) || version < 1) {
            version = 1;
        }

        if (post === undefined || post == null || post !== true) {
            post = false;
        }

        if (put === undefined || put == null || put !== true) {
            put = false;
        }

        if (del === undefined || del == null || del !== true) {
            del = false;
        }

        var routeLive = express.route(url);
        var routeVersion = express.route('/v' + version + url);

        routeLive.get(func);
        routeVersion.get(func);

        if (post) {
            routeLive.post(func);
            routeVersion.post(func);
        }

        if (put) {
            routeLive.put(func);
            routeVersion.put(func);
        }

        if (del) {
            routeLive.delete(func);
            routeVersion.delete(func);
        }
    };

    return MakeAPI;
})();

/* Export the module */
xport(module, makeAPI);