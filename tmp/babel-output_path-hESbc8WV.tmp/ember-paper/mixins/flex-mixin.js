define('ember-paper/mixins/flex-mixin', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Mixin = _ember['default'].Mixin;

  /**
   * Adds bindings to flex attributes
   * - flex=true|false
   * - flex-layout=column|row
   *
   * @class FlexMixin
   * @extends Ember.Mixin
   */
  exports['default'] = Mixin.create({
    attributeBindings: ['flex', 'flex-layout:layout',
    // Allow responsive layout definition ( see layout.scss: layout-for-name ):
    'layout-sm', 'layout-gt-sm', 'layout-md', 'layout-gt-md', 'layout-lg', 'layout-gt-lg']
  });
});