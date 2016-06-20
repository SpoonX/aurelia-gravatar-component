import {StageComponent} from 'aurelia-testing';
import {GravatarCustomElement} from './gravatar';

// aurelia-testing
// http://blog.durandal.io/2016/05/03/aurelias-new-validation-and-testing-capabilities/
describe("gravatarCustomElement", () => {

  let gravatar;

  beforeEach(() => {
    gravatar = StageComponent
    .withResources('src/gravatar')
    .inView('<gravatar></gravatar>')
    .boundTo({});
  });

  it("has the following defaults", () => {
    gravatar.create().then(() => {
      let vm = gravatar.viewModel;
      expect(vm.email).toBe('');
      expect(vm.size).toBe(200);
      expect(vm.defaultTo).toBe('monsterid');
      expect(vm.forceDefault).toBe(false);
      expect(vm.secure).toBe(false);
    });
  });

  it("throws an error when default to image is not a valid one", () => {
    gravatar.create().then(() => {
      let vm = gravatar.viewModel;
      vm.defaultTo = 'bingo'
      expect(vm.url).toThrow();
    });
  });

  it("does not throw an error when is a valid default", () => {
    gravatar.create().then(() => {
      let vm = gravatar.viewModel;
      vm.defaultTo = 'identicon';
      expect(vm.url).not.toThrow();
    });
  });

  it("can force default image to load by appending &=y", () => {
    gravatar.create().then(() => {
      let vm = gravatar.viewModel;
      vm.forceDefault = true;
      expect(vm.url).toBe(''); //FIXME
    });
  })
});
