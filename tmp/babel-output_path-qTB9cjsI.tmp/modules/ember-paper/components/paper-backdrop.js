/**
 * @module ember-paper
 */
import Ember from 'ember';
import TransitionMixin from 'ember-css-transitions/mixins/transition-mixin';

var Component = Ember.Component;
var computed = Ember.computed;
var htmlSafe = Ember.String.htmlSafe;

/**
 * @class PaperBackdrop
 * @extends Ember.Component
 * @uses TransitionMixin
 */
export default Component.extend(TransitionMixin, {

  tagName: 'md-backdrop',
  classNames: ['md-default-theme'],
  classNameBindings: ['opaque:md-opaque', 'isLockedOpen:md-locked-open'],
  attributeBindings: ['backdropStyle:style'],

  // TransitionMixin:
  transitionClass: 'ng',
  shouldTransition: computed.bool('opaque'),

  backdropStyle: computed('fixed', 'translateStyle', function () {
    var style = this.get('translateStyle');
    return this.get('fixed') ? htmlSafe('position:fixed; ' + style) : style;
  }),

  addDestroyedElementClone: function addDestroyedElementClone(parent, index, clone) {
    parent.append(clone);
  },

  click: function click(e) {
    e.preventDefault();
    this.sendAction('onClick', e);
  }

});