var xport = require('../xport')
  ;

var dtype = (function() {
    function DType() {}

    DType.isNumber = function(value) {
        return ((value instanceof Number || typeof value === 'number') && !isNaN(value));
    };

    DType.isNumerical = function(value) {
        if (DType.isNumber(value)) {
            return true;
        }

        return DType.isNumber(new Number(value));
    };

    return DType;
})();

/* Export the module */
xport(module, dtype);