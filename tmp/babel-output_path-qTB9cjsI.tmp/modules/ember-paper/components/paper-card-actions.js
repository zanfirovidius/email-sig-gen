/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;

/**
 * @class PaperCardActions
 * @extends Ember.Component
 */
export default Component.extend({
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