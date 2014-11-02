var xport = require('../../xport')
  , dtype = require('../dtype')
  ;

var types = [
    "TV",
    "OVA",
    "Movie",
    "Sidestory",
    "Spinoff"
];

var animeType = (function() {
    function AnimeType() {}

    for (var i = 0; i < types.length; i++) {
        AnimeType[types[i]] = i;
        AnimeType[types[i].toLowerCase()] = i;
        AnimeType[i] = types[i];
    }

    AnimeType.findType = function(name) {
        if (name === undefined || name == null) {
            return AnimeType.TV;
        }

        var num = new Number(name);
        if (dtype.isNumber(num)) {
            if (AnimeType[num] === undefined) {
                return AnimeType.TV;
            }
            
            return num;
        }

        var type = AnimeType[new String(name).toLowerCase()];
        if (type === undefined) {
            return AnimeType.TV;
        }

        return type;
    };

    return AnimeType;
})();

/* Export the module */
xport(module, animeType);