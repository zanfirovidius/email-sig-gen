/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;

/**
 * @class PaperAutocompleteItem
 * @extends Ember.Component
 */
export default Component.extend({
  tagName: 'li',
  attributeBindings: ['tabindex', 'role'],
  classNameBindings: ['isSelected:selected'],
  tabindex: 0,
  role: 'option',

  label: Ember.computed('item', function () {
    return this.lookupLabelOfItem(this.get('item'));
  }),

  isSelected: Ember.computed('selectedIndex', function () {
    return this.get('selectedIndex') === this.get('index');
  }),

  lookupLabelOfItem: function lookupLabelOfItem(model) {
    return this.get('lookupKey') ? Ember.get(model, this.get('lookupKey')) : model;
  },

  click: function click() {
    this.sendAction('pick', this.get('item'));
  }
});