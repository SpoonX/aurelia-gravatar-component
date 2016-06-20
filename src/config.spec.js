import {GravatarCustomElement} from './gravatar';
import {Config} from './config';

describe('Config', () => {

  let gravatar;

  beforeEach(() => {
    gravatar = new GravatarCustomElement();
  });

  it('has the following defaults', () => {
    expect(gravatar.email).toBe('');
    expect(gravatar.size).toBe(200);
    expect(gravatar.defaultTo).toBe('monsterid');
    expect(gravatar.forceDefault).toBe(false);
    expect(gravatar.secure).toBe(false);
  });

  it('throws an error when default to image is not a valid one', () => {
    gravatar.defaultTo = 'bingo';
    expect(() => {gravatar.url;}).toThrow();
  });

  it('does not throw an error when is a valid default', () => {
    gravatar.defaultTo = 'identicon';
    expect(() => {gravatar.url;}).not.toThrow();
  });

  it('can force default image to load by appending &=y', () => {
      gravatar.forceDefault = true;
      expect(gravatar.url.endsWith('&f=y')).toBe(true);
  });

  it('constructs the url correctly', () => {
    expect(gravatar.url).toBe('http://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e/?s=200&d=monsterid&r=g');
  });
});
