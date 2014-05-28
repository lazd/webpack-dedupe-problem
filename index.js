var module1 = require('./lib/module1.js');
var module2 = require('./lib/module2.js');

module.exports = function() {
  var x = module1();
  var y = module2();
  console.log('App started with %f and %f!', x, y);
};
