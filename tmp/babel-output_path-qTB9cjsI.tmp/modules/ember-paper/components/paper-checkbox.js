/**
 * @module ember-paper
 */
import Ember from 'ember';
import BaseFocusable from './base-focusable';
import RippleMixin from '../mixins/ripple-mixin';
import ProxiableMixin from 'ember-paper/mixins/proxiable-mixin';
import ColorMixin from 'ember-paper/mixins/color-mixin';

var inject = Ember.inject;
var assert = Ember.assert;

/**
 * @class PaperCheckbox
 * @extends BaseFocusable
 * @uses ColorMixin
 * @uses ProxiableMixin
 * @uses RippleMixin
 */
export default BaseFocusable.extend(RippleMixin, ProxiableMixin, ColorMixin, {
  tagName: 'md-checkbox',
  classNames: ['md-checkbox', 'md-default-theme'],
  classNameBindings: ['value:md-checked'],

  /* Ripple Overrides */
  rippleContainerSelector: '.md-container',
  center: true,
  dimBackground: false,
  fitRipple: true,

  /* BaseFocusable Overrides */
  focusOnlyOnKey: true,

  constants: inject.service(),

  value: false,

  init: function init() {
    this._super.apply(this, arguments);
    assert('{{paper-checkbox}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined);
  },

  click: function click() {
    if (!this.get('disabled')) {
      this.sendAction('onChange', !this.get('value'));
    }
    // Prevent bubbling, if specified. If undefined, the event will bubble.
    return this.get('bubbles');
  },

  keyPress: function keyPress(ev) {
    if (ev.which === this.get('constants.KEYCODE.SPACE') || ev.which === this.get('constants.KEYCODE.ENTER')) {
      ev.preventDefault();
      this.click();
    }
  },

  processProxy: function processProxy() {
    this.sendAction('onChange', !this.get('value'));
  }
});