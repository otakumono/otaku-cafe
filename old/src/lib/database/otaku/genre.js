var xport = require('node-xport')
  , dtype = require('../../dtype')
  ;

var genres = [
    "None",
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Erotica",
    "Fantasy",
    "Historical",
    "Horror",
    "Kids",
    "Magic",
    "Mecha",
    "Mystery",
    "Parody",
    "Psychological",
    "Romance",
    "Seinen",
    "Scifi",
    "SliceOfLife",
    "Shoujo",
    "Shounen",
    "Sports",
    "Supernatural",
    "Thriller",
    "Tournament",
    "Yaoi",
    "Yuri"
];

var genre = (function() {
    function Genre() {}

    for (var i = 0; i < genres.length; i++) {
        Genre[genres[i]] = i;
        Genre[genres[i].toLowerCase()] = i;
        Genre[i] = genres[i];
    }

    Genre.findType = function(name) {
        if (name === undefined || name == null) {
            return Genre.None;
        }

        var num = new Number(name);
        if (dtype.isNumber(num)) {
            if (Genre[num] === undefined) {
                return Genre.None;
            }
            
            return num;
        }

        var type = Genre[new String(name).toLowerCase()];
        if (type === undefined) {
            return Genre.None;
        }

        return type;
    };

    return Genre;
})();

/* Module Export */
xport(module, genre);