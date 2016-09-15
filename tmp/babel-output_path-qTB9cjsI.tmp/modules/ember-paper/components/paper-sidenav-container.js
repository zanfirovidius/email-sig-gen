/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;

/**
 * @class PaperSidenavContainer
 * @extends Ember.Component
 */
export default Component.extend({
  classNames: ['flex', 'layout-row'],
  attributeBindings: ['style'],
  style: Ember.String.htmlSafe('overflow: hidden')
});