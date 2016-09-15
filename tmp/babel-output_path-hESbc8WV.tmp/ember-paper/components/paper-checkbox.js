define('ember-paper/components/paper-checkbox', ['exports', 'ember', 'ember-paper/components/base-focusable', 'ember-paper/mixins/ripple-mixin', 'ember-paper/mixins/proxiable-mixin', 'ember-paper/mixins/color-mixin'], function (exports, _ember, _emberPaperComponentsBaseFocusable, _emberPaperMixinsRippleMixin, _emberPaperMixinsProxiableMixin, _emberPaperMixinsColorMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var inject = _ember['default'].inject;
  var assert = _ember['default'].assert;

  /**
   * @class PaperCheckbox
   * @extends BaseFocusable
   * @uses ColorMixin
   * @uses ProxiableMixin
   * @uses RippleMixin
   */
  exports['default'] = _emberPaperComponentsBaseFocusable['default'].extend(_emberPaperMixinsRippleMixin['default'], _emberPaperMixinsProxiableMixin['default'], _emberPaperMixinsColorMixin['default'], {
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
});