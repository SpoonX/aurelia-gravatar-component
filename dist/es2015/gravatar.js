var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import { computedFrom, bindable, inject } from 'aurelia-framework';
import { Config } from './config';
import md5 from 'md5';

export let GravatarCustomElement = (_dec = inject(Config), _dec2 = computedFrom('defaultTo'), _dec3 = computedFrom('size', 'email', 'defaultGravatar', 'forceDefault', 'secure'), _dec(_class = (_class2 = class GravatarCustomElement {

  constructor(config) {
    _initDefineProp(this, 'email', _descriptor, this);

    _initDefineProp(this, 'size', _descriptor2, this);

    _initDefineProp(this, 'rating', _descriptor3, this);

    _initDefineProp(this, 'forceDefault', _descriptor4, this);

    _initDefineProp(this, 'defaultTo', _descriptor5, this);

    _initDefineProp(this, 'secure', _descriptor6, this);

    Object.assign(this, config.configurations);
  }

  get defaultGravatar() {
    const defaults = ['404', 'mm', 'identicon', 'monsterid', 'wavatar', 'retro', 'blank'];

    if (defaults.indexOf(this.defaultTo) === -1) {
      throw new Error(`${ this.defaultTo } is not a valid gravatar default to image. Choose one of the following: ` + JSON.stringify(defaults));
    }

    return this.defaultTo;
  }

  get url() {
    let base = (this.secure ? 'https://secure' : 'http://www') + '.gravatar.com/avatar';
    let hash = md5(this.email);
    let url = `${ base }/${ hash }/?s=${ this.size }&d=${ this.defaultGravatar }&r=${ this.rating }`;

    return url + (this.forceDefault ? '&f=y' : '');
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'email', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'size', [bindable], {
  enumerable: true,
  initializer: function () {
    return 200;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'rating', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'g';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'forceDefault', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'defaultTo', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'monsterid';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'secure', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class2.prototype, 'defaultGravatar', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'defaultGravatar'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'url', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'url'), _class2.prototype)), _class2)) || _class);