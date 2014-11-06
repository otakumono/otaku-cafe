var xport = require('node-xport')(module)
  , dtype = require('../../dtype')
  ;

var ratings = [
    "Unknown",
    "TV",
    "OVA",
    "Movie",
    "Sidestory",
    "Spinoff"
];

var contentRating = (function() {
    function ContentRating() {}

    for (var i = 0; i < ratings.length; i++) {
        ContentRating[ratings[i]] = i;
        ContentRating[ratings[i].toLowerCase()] = i;
        ContentRating[i] = ratings[i];
    }

    ContentRating.findType = function(name) {
        if (name === undefined || name == null) {
            return ContentRating.Unknown;
        }

        var num = new Number(name);
        if (dtype.isNumber(num)) {
            if (ContentRating[num] === undefined) {
                return ContentRating.Unknown;
            }
            
            return num;
        }

        var type = ContentRating[new String(name).toLowerCase()];
        if (type === undefined) {
            return ContentRating.Unknown;
        }

        return type;
    };

    return ContentRating;
})();

/* Export the module */
xport(contentRating);