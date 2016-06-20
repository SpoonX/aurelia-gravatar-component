'use strict';

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      function configure(app) {
        var configCallback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

        var config = app.container.get(Config);

        typeof configCallback === 'function' && configCallback(config);

        app.globalResources('./gravatar');
      }

      _export('configure', configure);
    }
  };
});