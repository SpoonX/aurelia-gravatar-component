import {computedFrom, bindable} from 'aurelia-framework';
import md5 from 'md5';

export class GravatarCustomElement {

  @bindable email = '';

  @bindable size = 200;

  // g: suitable for display on all websites with any audience type.
  // pg: may contain rude gestures, provocatively dressed individuals, the lesser swear words, or mild violence.
  // r: may contain such things as harsh profanity, intense violence, nudity, or hard drug use.
  // x: may contain hardcore sexual imagery or extremely disturbing violence.
  rating = 'g';
  forceDefault = false;
  defaultTo = 'monsterid';
  secure = false;

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
    let base;
    if (this.secure) {
      base = 'http://www.gravatar.com/avatar';
    } else {
      base = 'https://secure.gravatar.com/avatar';
    }

    let hash = md5(this.email);
    let url = `${base}/${hash}/?s=${this.size}&d=${this.defaultGravatar}`;
    if (this.forceDefault) {
      url = url + '&f=y';
    }
    return url;
  }
}
