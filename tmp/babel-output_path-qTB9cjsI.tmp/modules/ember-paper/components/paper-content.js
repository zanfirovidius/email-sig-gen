/**
 * @module ember-paper
 */
import Ember from 'ember';
import FlexMixin from '../mixins/flex-mixin';

var Component = Ember.Component;

/**
 * @class PaperContent
 * @extends Ember.Component
 * @uses FlexMixin
 */
export default Component.extend(FlexMixin, {
  tagName: 'md-content',
  classNames: ['md-default-theme'],
  attributeBindings: ['layout-padding', 'scroll-y:md-scroll-y'],
  classNameBindings: ['padding:md-padding']
});