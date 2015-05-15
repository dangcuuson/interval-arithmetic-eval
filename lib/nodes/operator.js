/**
 * Created by mauricio on 5/14/15.
 */
'use strict';
var utils = require('../utils');
var Interval = require('interval-arithmetic');

module.exports = function (next, exp) {
  if (!(exp.fn in Interval)) {
    utils.notDefined(exp.fn);
  }
  var args = [];
  for (var i = 0; i < exp.args.length; i += 1) {
    args.push(next(exp.args[i]));
  }
  var joined = args.join(', ');
  return 'ns.' + exp.fn + '(' + joined + ')';
};