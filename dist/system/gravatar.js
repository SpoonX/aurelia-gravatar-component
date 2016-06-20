'use strict';

System.register(['aurelia-framework', './config', 'md5'], function (_export, _context) {
  "use strict";

  var computedFrom, bindable, inject, Config, md5, _createClass, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, GravatarCustomElement;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_config) {
      Config = _config.Config;
    }, function (_md) {
      md5 = _md.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('GravatarCustomElement', GravatarCustomElement = (_dec = inject(Config), _dec2 = computedFrom('defaultTo'), _dec3 = computedFrom('size', 'email', 'defaultGravatar', 'forceDefault', 'secure'), _dec(_class = (_class2 = function () {
        function GravatarCustomElement(config) {
          _classCallCheck(this, GravatarCustomElement);

          _initDefineProp(this, 'email', _descriptor, this);

          _initDefineProp(this, 'size', _descriptor2, this);

          _initDefineProp(this, 'rating', _descriptor3, this);

          _initDefineProp(this, 'forceDefault', _descriptor4, this);

          _initDefineProp(this, 'defaultTo', _descriptor5, this);

          _initDefineProp(this, 'secure', _descriptor6, this);

          Object.assign(this, config.configurations);
        }

        _createClass(GravatarCustomElement, [{
          key: 'defaultGravatar',
          get: function get() {
            var defaults = ['404', 'mm', 'identicon', 'monsterid', 'wavatar', 'retro', 'blank'];

            if (defaults.indexOf(this.defaultTo) === -1) {
              throw new Error(this.defaultTo + ' is not a valid gravatar default to image. Choose one of the following: ' + JSON.stringify(defaults));
            }

            return this.defaultTo;
          }
        }, {
          key: 'url',
          get: function get() {
            var base = (this.secure ? 'https://secure' : 'http://www') + '.gravatar.com/avatar';
            var hash = md5(this.email);
            var url = base + '/' + hash + '/?s=' + this.size + '&d=' + this.defaultGravatar + '&r=' + this.rating;

            return url + (this.forceDefault ? '&f=y' : '');
          }
        }]);

        return GravatarCustomElement;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'email', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'size', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'rating', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'g';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'forceDefault', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'defaultTo', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'monsterid';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'secure', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, 'defaultGravatar', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'defaultGravatar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'url', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'url'), _class2.prototype)), _class2)) || _class));

      _export('GravatarCustomElement', GravatarCustomElement);
    }
  };
});