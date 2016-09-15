define('ember-paper/components/paper-card', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCard
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'md-card'
  });
});