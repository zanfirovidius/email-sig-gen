/**
 * @module ember-paper
 */
import Ember from 'ember';

var Mixin = Ember.Mixin;

/**
 * @class ProxyMixin
 * @extends Ember.Mixin
 */
export default Mixin.create({
  proxiedComponents: Ember.computed(function () {
    return Ember.A();
  }),
  register: function register(component) {
    if (!component.get('skipProxy')) {
      this.get('proxiedComponents').addObject(component);
      this.setupProxiedComponent();
    }
  }
});