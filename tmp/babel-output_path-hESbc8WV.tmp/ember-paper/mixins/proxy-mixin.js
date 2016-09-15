define('ember-paper/mixins/proxy-mixin', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Mixin = _ember['default'].Mixin;

  /**
   * @class ProxyMixin
   * @extends Ember.Mixin
   */
  exports['default'] = Mixin.create({
    proxiedComponents: _ember['default'].computed(function () {
      return _ember['default'].A();
    }),
    register: function register(component) {
      if (!component.get('skipProxy')) {
        this.get('proxiedComponents').addObject(component);
        this.setupProxiedComponent();
      }
    }
  });
});