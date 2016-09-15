/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;

/**
 * @class PaperDialogContainer
 * @extends Ember.Component
 */
export default Component.extend({
  classNames: ['md-dialog-container'],

  click: function click() {
    this.sendAction('outsideClicked');
  }
});