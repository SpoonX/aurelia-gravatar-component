
export function configure(app, configCallback = () => {}) {
  let config = app.container.get(Config);

  typeof configCallback === 'function' && configCallback(config);

  app.globalResources('./gravatar');
}