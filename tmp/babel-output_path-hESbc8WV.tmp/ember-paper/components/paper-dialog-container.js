define('ember-paper/components/paper-dialog-container', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperDialogContainer
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    classNames: ['md-dialog-container'],

    click: function click() {
      this.sendAction('outsideClicked');
    }
  });
});