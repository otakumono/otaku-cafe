var xport = require('node-xport')
  , dtype = require('../../dtype')
  ;

var statuses = [
    "Unknown",
    "Future",
    "Ongoing",
    "Complete"
];

var status = (function() {
    function Status() {}

    for (var i = 0; i < statuses.length; i++) {
        Status[statuses[i]] = i;
        Status[statuses[i].toLowerCase()] = i;
        Status[i] = statuses[i];
    }

    Status.findType = function(name) {
        if (name === undefined || name == null) {
            return Status.None;
        }

        var num = new Number(name);
        if (dtype.isNumber(num)) {
            if (Status[num] === undefined) {
                return Status.None;
            }
            
            return num;
        }

        var type = Status[new String(name).toLowerCase()];
        if (type === undefined) {
            return Status.None;
        }

        return type;
    };

    return Status;
})();

/* Module Export */
xport(module, status);