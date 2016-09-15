define('ember-paper/components/paper-subheader', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperSubheader
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'h2',
    classNames: ['md-subheader']
  });
});