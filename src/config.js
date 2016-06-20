export class Config {

  configurations = {}

  configure(configs) {
    this.configurations = Object.assign(this.configurations, configs);
    return this;
  }
}
