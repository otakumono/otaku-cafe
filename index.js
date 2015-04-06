var xport = require('node-xport')(module),
    OtakuCafe = require('./lib/'),
    OtakuCore = OtakuCafe.OtakuCore;

OtakuCafe.prepare();
OtakuCafe.run();

/* Export the module */
xport(OtakuCafe);