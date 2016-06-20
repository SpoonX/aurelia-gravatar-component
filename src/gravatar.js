import {computedFrom, bindable, inject} from 'aurelia-framework';
import {Config} from './config';
import md5 from 'md5';

@inject(Config)
export class GravatarCustomElement {

  @bindable email        = '';
  @bindable size         = 200;
  @bindable rating       = 'g';
  @bindable forceDefault = false;
  @bindable defaultTo    = 'monsterid';
  @bindable secure       = false;

  constructor(config) {
    Object.assign(this, config.configurations); /* alter the defaults of the view model */
  }

  @computedFrom('defaultTo')
  get defaultGravatar() {
    const defaults = ['404', 'mm', 'identicon', 'monsterid', 'wavatar', 'retro', 'blank'];

    if (defaults.indexOf(this.defaultTo) === -1) {
      throw new Error(`${this.defaultTo} is not a valid gravatar default to image. Choose one of the following: ` + JSON.stringify(defaults));
    }

    return this.defaultTo;
  }

  @computedFrom('size', 'email', 'defaultGravatar', 'forceDefault', 'secure')
  get url() {
    let base = (this.secure ? 'https://secure' : 'http://www') + '.gravatar.com/avatar';
    let hash = md5(this.email);
    let url  = `${base}/${hash}/?s=${this.size}&d=${this.defaultGravatar}&r=${this.rating}`;

    return url + (this.forceDefault ? '&f=y' : '');
  }
}
