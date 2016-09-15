/**
 * @module ember-paper
 */
import Ember from 'ember';
import BaseFocusable from './base-focusable';
import RippleMixin from '../mixins/ripple-mixin';
import ColorMixin from 'ember-paper/mixins/color-mixin';

var computed = Ember.computed;
var assert = Ember.assert;

/**
 * @class PaperRadio
 * @extends BaseFocusable
 * @uses ColorMixin
 * @uses RippleMixin
 */
export default BaseFocusable.extend(RippleMixin, ColorMixin, {
  tagName: 'md-radio-button',
  classNames: ['md-default-theme'],
  classNameBindings: ['checked:md-checked'],

  tabindex: null,

  toggle: false,

  /* Ripple Overrides */
  rippleContainerSelector: '.md-container',
  center: true,
  dimBackground: false,
  fitRipple: true,

  /* BaseFocusable Overrides */
  focusOnlyOnKey: true,

  // Lifecycle hooks
  init: function init() {
    this._super.apply(this, arguments);
    assert('{{paper-radio}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined);

    if (this.get('parentGroup')) {
      this.get('parentGroup').register(this);
    }
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    if (this.get('parentGroup')) {
      this.get('parentGroup').unregister(this);
    }
  },

  checked: computed('groupValue', 'value', function () {
    return this.get('groupValue') === this.get('value');
  }),

  click: function click() {
    if (!this.get('disabled')) {
      if (this.get('toggle')) {
        this.sendAction('onChange', this.get('checked') ? null : this.get('value'));
      } else {
        this.sendAction('onChange', this.get('value'));
      }
    }
    // Prevent bubbling, if specified. If undefined, the event will bubble.
    return this.get('bubbles');
  }
});