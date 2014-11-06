var xport = require('node-xport')(module)
  , dtype = require('./lib/dtype')
  ;

var makeAPI = (function() {
    function MakeAPI() {}

    MakeAPI.route = function(express, url, func, version, post, put, del, nowildcard) {
        if (!dtype.isNumerical(version)) {
            version = 1;
        }

        version = new Number(version);

        if (post === undefined || post == null || post !== true) {
            post = false;
        }

        if (put === undefined || put == null || put !== true) {
            put = false;
        }

        if (del === undefined || del == null || del !== true) {
            del = false;
        }

        if (nowildcard === undefined || nowildcard == null || nowildcard !== true) {
            nowildcard = false;
        }

        var fullUrl = url + (nowildcard ? '' : '/*');
        var versionPath = '/v' + version
        
        var routeLive = express.route(url);
        var routeVersion = express.route(versionPath + url);

        if (!nowildcard) {
            var routeLiveWildcard = express.route(fullUrl);
            var routeVersionWildcard = express.route(versionPath + fullUrl);
        }

        routeLive.get(func);
        routeVersion.get(func);

        if (!nowildcard) {
            routeLiveWildcard.get(func);
            routeVersionWildcard.get(func);
        }

        if (post) {
            routeLive.post(func);
            routeVersion.post(func);

            if (!nowildcard) {
                routeLiveWildcard.post(func);
                routeVersionWildcard.post(func);
            }
        }

        if (put) {
            routeLive.put(func);
            routeVersion.put(func);

            if (!nowildcard) {
                routeLiveWildcard.put(func);
                routeVersionWildcard.put(func);
            }
        }

        if (del) {
            routeLive.delete(func);
            routeVersion.delete(func);

            if (!nowildcard) {
                routeLiveWildcard.delete(func);
                routeVersionWildcard.delete(func);
            }
        }
    };

    return MakeAPI;
})();

/* Export the module */
xport(makeAPI);