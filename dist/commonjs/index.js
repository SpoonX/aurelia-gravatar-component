'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _config = require('./config');

function configure(app) {
  var configCallback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

  var config = app.container.get(_config.Config);

  typeof configCallback === 'function' && configCallback(config);

  app.globalResources('./gravatar');
}