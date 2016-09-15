define('ember-paper/components/paper-radio', ['exports', 'ember', 'ember-paper/components/base-focusable', 'ember-paper/mixins/ripple-mixin', 'ember-paper/mixins/color-mixin'], function (exports, _ember, _emberPaperComponentsBaseFocusable, _emberPaperMixinsRippleMixin, _emberPaperMixinsColorMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var computed = _ember['default'].computed;
  var assert = _ember['default'].assert;

  /**
   * @class PaperRadio
   * @extends BaseFocusable
   * @uses ColorMixin
   * @uses RippleMixin
   */
  exports['default'] = _emberPaperComponentsBaseFocusable['default'].extend(_emberPaperMixinsRippleMixin['default'], _emberPaperMixinsColorMixin['default'], {
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
});