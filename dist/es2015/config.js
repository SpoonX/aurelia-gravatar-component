export let Config = class Config {
  constructor() {
    this.configurations = {};
  }

  configure(configs) {
    this.configurations = Object.assign(this.configurations, configs);
    return this;
  }
};