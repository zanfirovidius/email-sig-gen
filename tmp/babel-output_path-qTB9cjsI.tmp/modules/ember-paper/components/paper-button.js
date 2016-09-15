/**
 * @module ember-paper
 */
import Ember from 'ember';
import BaseFocusable from './base-focusable';
import RippleMixin from '../mixins/ripple-mixin';
import ProxiableMixin from 'ember-paper/mixins/proxiable-mixin';
import ColorMixin from 'ember-paper/mixins/color-mixin';

var computed = Ember.computed;

/**
 * @class PaperButton
 * @extends BaseFocusable
 * @uses ColorMixin
 * @uses ProxiableMixin
 * @uses RippleMixin
 */
export default BaseFocusable.extend(RippleMixin, ProxiableMixin, ColorMixin, {
  tagName: 'button',
  classNames: ['paper-button', 'md-default-theme', 'md-button'],
  raised: false,
  iconButton: false,
  fab: computed.reads('mini'), // circular button
  mini: false,
  type: 'button',
  href: null,
  target: null,
  attributeBindings: ['type', 'href', 'target'],
  classNameBindings: ['raised:md-raised', 'iconButton:md-icon-button', 'fab:md-fab', 'mini:md-mini'],

  // Ripple Overrides
  rippleContainerSelector: null,
  fitRipple: computed.readOnly('iconButton'),
  center: computed.readOnly('iconButton'),
  dimBackground: computed.not('iconButton'),

  init: function init() {
    this._super.apply(this, arguments);
    if (this.get('href')) {
      this.setProperties({
        tagName: 'a',
        type: null
      });
    }
  },

  click: function click(event) {
    this.sendAction('onClick', event);
    // Prevent bubbling, if specified. If undefined, the event will bubble.
    return this.get('bubbles');
  }
});