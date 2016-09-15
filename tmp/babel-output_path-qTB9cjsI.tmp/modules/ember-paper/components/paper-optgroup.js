/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;

/**
 * @class PaperOptgroup
 * @extends Ember.Component
 */
export default Component.extend({
  tagName: 'md-optgroup',
  attributeBindings: ['label']
});