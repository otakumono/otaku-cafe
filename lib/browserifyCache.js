var xport = require('node-xport')(module),
    browserify = require('browserify-cached'),
    devnull = require('dev-null')();

function BrowserifyCache() {
  var cache = {};

  this.getCache = function () {
    return cache;
  };

  this.clear = function () {
    cache = {};
  };

  this.isCached = function (module) {
    return cache.hasOwnProperty(module);
  };

  this.cache = function (module, bundle) {
    if (!module) {
      return null;
    }

    bundle = (bundle || browserify(module));

    cache[module] = bundle;

    return bundle;
  };

  this.get = function (module) {
    if (!this.isCached(module)) {
      return this.cache(module);
    }

    return cache[module];
  };

  this.preload = function (module, stream) {
    var pipe = this.pipe(module, stream);
    console.log('Preloaded "%s".', module);
    return pipe;
  };

  this.pipe = function (module, stream) {
    var bundle = this.get(module);
    stream = (stream || devnull);
    
    if (bundle && stream) {
      return bundle(true).pipe(stream);
    }
  };
}

/* Export the module */
xport(BrowserifyCache);