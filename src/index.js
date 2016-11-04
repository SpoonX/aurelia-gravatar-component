import {Config} from './config';

/**
 * configure the gravatar component
 *
 * @param {Aurelia} app instance of the application
 * @param {function} configCallback
 *
 */
export function configure(app, configCallback) {
  let config = app.container.get(Config);

  if (typeof configCallback === 'function') {
    configCallback(config);
  }

  app.globalResources('./gravatar');
}
