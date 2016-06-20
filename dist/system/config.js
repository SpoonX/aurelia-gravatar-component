"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Config;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("Config", Config = function () {
        function Config() {
          _classCallCheck(this, Config);

          this.configurations = {};
        }

        Config.prototype.configure = function configure(configs) {
          this.configurations = Object.assign(this.configurations, configs);
          return this;
        };

        return Config;
      }());

      _export("Config", Config);
    }
  };
});