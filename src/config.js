export class Config {

  configurations = {}

  /**
   * extends the configurations object
   *
   * @param {object} configs
   *
   * @chainable
   */
  configure(configs) {
    this.configurations = Object.assign(this.configurations, configs);

    return this;
  }
}
