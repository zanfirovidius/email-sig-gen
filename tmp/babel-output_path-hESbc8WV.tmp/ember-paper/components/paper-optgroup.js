define('ember-paper/components/paper-optgroup', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperOptgroup
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'md-optgroup',
    attributeBindings: ['label']
  });
});