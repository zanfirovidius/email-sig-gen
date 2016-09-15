define('ember-paper/mixins/proxiable-mixin', ['exports', 'ember', 'ember-paper/mixins/proxy-mixin'], function (exports, _ember, _emberPaperMixinsProxyMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var isEmpty = _ember['default'].isEmpty;

  /**
   * @class ProxiableMixin
   * @extends Ember.Mixin
   */
  exports['default'] = Mixin.create({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].run.next(this, 'registerProxy');
    },

    registerProxy: function registerProxy() {
      var proxy = this.nearestOfType(_emberPaperMixinsProxyMixin['default']);
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
});