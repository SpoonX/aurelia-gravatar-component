'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GravatarCustomElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2;

var _aureliaFramework = require('aurelia-framework');

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var GravatarCustomElement = exports.GravatarCustomElement = (_dec = (0, _aureliaFramework.computedFrom)('defaultTo'), _dec2 = (0, _aureliaFramework.computedFrom)('size', 'email', 'defaultGravatar', 'forceDefault', 'secure'), (_class = function () {
  function GravatarCustomElement() {
    _classCallCheck(this, GravatarCustomElement);

    _initDefineProp(this, 'email', _descriptor, this);

    _initDefineProp(this, 'size', _descriptor2, this);

    this.rating = 'g';
    this.forceDefault = false;
    this.defaultTo = 'monsterid';
    this.secure = false;
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
      var base = void 0;
      if (this.secure) {
        base = 'http://www.gravatar.com/avatar';
      } else {
        base = 'https://secure.gravatar.com/avatar';
      }

      var hash = (0, _md2.default)(this.email);
      var url = base + '/' + hash + '/?s=' + this.size + '&d=' + this.defaultGravatar;
      if (this.forceDefault) {
        url = url + '&f=y';
      }
      return url;
    }
  }]);

  return GravatarCustomElement;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'email', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'size', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 200;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'defaultGravatar', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'defaultGravatar'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'url', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'url'), _class.prototype)), _class));