var xport = require('node-xport')
  , makeAPI = require('../../../makeapi')
  ;

var animeChart = (function() {
    function AnimeChart() {}

    AnimeChart.register = function(cafe, baseUrl) {
        
    };

    return AnimeChart;
})();

/* Export the module */
xport(module, animeChart);