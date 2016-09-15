define('ember-paper/components/paper-card-actions', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardActions
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'md-card-actions',
    classNameBindings: ['defaultClasses'],

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);

      // if the consumer didn't set layout classes, we should set them
      // to the default (layout = row, layout align = end center)
      var providedClasses = this.get('class');

      if (!providedClasses || providedClasses.indexOf('layout-') === -1) {
        this.set('defaultClasses', 'layout-row layout-align-end-center');
      }
    }
  });
});