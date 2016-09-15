/**
 * @module ember-paper
 */
import Ember from 'ember';
import ProxyMixin from './proxy-mixin';

var Mixin = Ember.Mixin;
var computed = Ember.computed;
var get = Ember.get;
var isEmpty = Ember.isEmpty;

/**
 * @class ProxiableMixin
 * @extends Ember.Mixin
 */
export default Mixin.create({
  init: function init() {
    this._super.apply(this, arguments);
    Ember.run.next(this, 'registerProxy');
  },

  registerProxy: function registerProxy() {
    var proxy = this.nearestOfType(ProxyMixin);
    if (proxy) {
      proxy.register(this);
    }
  },

  processProxy: null,

  // Paper item secondary container class
  isSecondary: computed('class', function () {
    var cls = get(this, 'class');
    if (!isEmpty(cls)) {
      return cls.indexOf('md-secondary') !== -1;
    } else {
      return false;
    }
  }),
  isProxyHandlerSet: false
});