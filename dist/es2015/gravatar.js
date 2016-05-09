var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2;

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

import { computedFrom, bindable } from 'aurelia-framework';
import md5 from 'md5';

export let GravatarCustomElement = (_dec = computedFrom('defaultTo'), _dec2 = computedFrom('size', 'email', 'defaultGravatar', 'forceDefault', 'secure'), (_class = class GravatarCustomElement {
  constructor() {
    _initDefineProp(this, 'email', _descriptor, this);

    _initDefineProp(this, 'size', _descriptor2, this);

    this.rating = 'g';
    this.forceDefault = false;
    this.defaultTo = 'monsterid';
    this.secure = false;
  }

  get defaultGravatar() {
    const defaults = ['404', 'mm', 'identicon', 'monsterid', 'wavatar', 'retro', 'blank'];

    if (defaults.indexOf(this.defaultTo) === -1) {
      throw new Error(`${ this.defaultTo } is not a valid gravatar default to image. Choose one of the following: ` + JSON.stringify(defaults));
    }

    return this.defaultTo;
  }

  get url() {
    let base;
    if (this.secure) {
      base = 'http://www.gravatar.com/avatar';
    } else {
      base = 'https://secure.gravatar.com/avatar';
    }

    let hash = md5(this.email);
    let url = `${ base }/${ hash }/?s=${ this.size }&d=${ this.defaultGravatar }`;
    if (this.forceDefault) {
      url = url + '&f=y';
    }
    return url;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'email', [bindable], {
  enumerable: true,
  initializer: function () {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'size', [bindable], {
  enumerable: true,
  initializer: function () {
    return 200;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'defaultGravatar', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'defaultGravatar'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'url', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'url'), _class.prototype)), _class));