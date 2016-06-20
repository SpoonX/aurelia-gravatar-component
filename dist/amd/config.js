define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Config = exports.Config = function () {
    function Config() {
      _classCallCheck(this, Config);

      this.configurations = {};
    }

    Config.prototype.configure = function configure(configs) {
      this.configurations = Object.assign(this.configurations, configs);
      return this;
    };

    return Config;
  }();
});