/**
 * @module ember-paper
 */
import Ember from 'ember';
import ParentMixin from 'ember-paper/mixins/parent-mixin';

var Component = Ember.Component;
var computed = Ember.computed;

/**
 * @class PaperForm
 * @extends Ember.Component
 * @uses ParentMixin
 */
export default Component.extend(ParentMixin, {
  tagName: '',
  isValid: computed.not('isInvalid'),
  isInvalid: computed('childComponents.@each.isInvalid', function () {
    return this.get('childComponents').isAny('isInvalid');
  }),
  actions: {
    onValidityChange: function onValidityChange() {
      if (this.get('lastIsValid') !== this.get('isValid')) {
        this.sendAction('onValidityChange', this.get('isValid'));
        this.set('lastIsValid', this.get('isValid'));
      }
    },
    onSubmit: function onSubmit() {
      this.sendAction('onSubmit');
      this.get('childComponents').setEach('isTouched', false);
    }
  }
});