define('ember-paper/components/paper-button', ['exports', 'ember', 'ember-paper/components/base-focusable', 'ember-paper/mixins/ripple-mixin', 'ember-paper/mixins/proxiable-mixin', 'ember-paper/mixins/color-mixin'], function (exports, _ember, _emberPaperComponentsBaseFocusable, _emberPaperMixinsRippleMixin, _emberPaperMixinsProxiableMixin, _emberPaperMixinsColorMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var computed = _ember['default'].computed;

  /**
   * @class PaperButton
   * @extends BaseFocusable
   * @uses ColorMixin
   * @uses ProxiableMixin
   * @uses RippleMixin
   */
  exports['default'] = _emberPaperComponentsBaseFocusable['default'].extend(_emberPaperMixinsRippleMixin['default'], _emberPaperMixinsProxiableMixin['default'], _emberPaperMixinsColorMixin['default'], {
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
});