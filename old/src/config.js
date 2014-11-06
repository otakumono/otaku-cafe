var xport = require('node-xport')(module)
  , nconf = require('nconf')
  , env = (process.env.NODE_ENV || 'development')
  , configFile = 'config/cafe_' + env + '.json'
  ;

/*
    Config values are determined in order from top to bottom, i.e.
        1. Use command-line arguments first,
        2. otherwise, use environment variables,
        3. otherwise, use the 'env_{env}.json' file (e.g. 'env_test.json'),
        4. lastly, use the defaults specified here.
    A good way to override any configs is to use command-line args or
    environment variables.
*/

nconf
    .argv()
    .env()
    .file({ file: configFile })
    .defaults({
      'port': 8888,
      'database': {
        'host': 'localhost',
        'port': 27017,
        'name': 'otaku'
      }
    })
    ;

/* Export the module */
xport(nconf);