'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var doStuff = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return get('http://google.com');

          case 2:
            res = _context.sent;

            console.log('got ' + res);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function doStuff() {
    return ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Async functions can await a promise
 *
 * This file must be transpiled, as async/await is an ES7 proposal:
 * ./node_modules/.bin/babel --presets es2015,stage-3 --plugins transform-runtime async_await.babel.js --out-file async_await.js
 */
function get(url) {
  return new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      return resolve('data from ' + url);
    }, Math.random() * 10 + 20);
  });
}

doStuff();
