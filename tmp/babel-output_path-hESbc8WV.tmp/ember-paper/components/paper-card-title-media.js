define('ember-paper/components/paper-card-title-media', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardTitleMedia
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'md-card-title-media',
    size: 'md'
  });
});