/**
 * @module ember-paper
 */
import Ember from 'ember';
import RippleMixin from '../mixins/ripple-mixin';
import ProxyMixin from 'ember-paper/mixins/proxy-mixin';

var get = Ember.get;
var set = Ember.set;
var isEmpty = Ember.isEmpty;
var computed = Ember.computed;
var run = Ember.run;
var Component = Ember.Component;

/**
 * @class PaperItem
 * @extends Ember.Component
 * @uses ProxyMixin
 * @uses RippleMixin
 */
export default Component.extend(RippleMixin, ProxyMixin, {
  tagName: 'md-list-item',

  // Ripple Overrides
  rippleContainerSelector: '.md-no-style',
  center: false,
  dimBackground: true,
  outline: false,

  classNameBindings: ['shouldBeClickable:md-clickable', 'hasProxiedComponent:md-proxy-focus'],
  attributeBindings: ['role', 'tabindex'],
  role: 'listitem',
  tabindex: '-1',

  hasProxiedComponent: computed.bool('proxiedComponents.length'),

  hasPrimaryAction: computed.notEmpty('onClick'),

  hasSecondaryAction: computed('secondaryItem', 'onClick', function () {
    var secondaryItem = get(this, 'secondaryItem');
    if (!isEmpty(secondaryItem)) {
      var hasClickAction = get(secondaryItem, 'onClick');
      var hasChangeAction = get(secondaryItem, 'onChange');
      return hasClickAction || hasChangeAction;
    } else {
      return false;
    }
  }),

  secondaryItem: computed('proxiedComponents.[]', function () {
    var proxiedComponents = get(this, 'proxiedComponents');
    return proxiedComponents.find(function (component) {
      return get(component, 'isSecondary');
    });
  }),

  shouldBeClickable: computed.or('proxiedComponents.length', 'onClick'),

  click: function click(ev) {
    var _this = this;

    this.get('proxiedComponents').forEach(function (component) {
      if (component.processProxy && !get(component, 'disabled') && get(component, 'bubbles') | !get(_this, 'hasPrimaryAction')) {
        component.processProxy();
      }
    });
    this.sendAction('onClick', ev);
  },

  setupProxiedComponent: function setupProxiedComponent() {
    var _this2 = this;

    var tEl = this.$();
    var proxiedComponents = get(this, 'proxiedComponents');
    proxiedComponents.forEach(function (component) {
      var isProxyHandlerSet = get(component, 'isProxyHandlerSet');
      // we run init only once for each component.
      if (!isProxyHandlerSet) {
        (function () {
          // Allow proxied component to propagate ripple hammer event
          if (!get(component, 'onClick') && !get(component, 'propagateRipple')) {
            set(component, 'propagateRipple', true);
          }
          // ripple
          var el = component.$();
          set(_this2, 'mouseActive', false);
          el.on('mousedown', function () {
            set(_this2, 'mouseActive', true);
            run.later(function () {
              set(_this2, 'mouseActive', false);
            }, 100);
          });
          el.on('focus', function () {
            if (!get(_this2, 'mouseActive')) {
              tEl.addClass('md-focused');
            }
            el.on('blur', function proxyOnBlur() {
              tEl.removeClass('md-focused');
              el.off('blur', proxyOnBlur);
            });
          });
          // If we don't have primary action then
          // no need to bubble
          if (!get(_this2, 'hasPrimaryAction')) {
            var bubbles = get(component, 'bubbles');
            if (isEmpty(bubbles)) {
              set(component, 'bubbles', false);
            }
          } else if (get(proxiedComponents, 'length')) {
            // primary action exists. Make sure child
            // that has separate action won't bubble.
            proxiedComponents.forEach(function (component) {
              var hasClickAction = get(component, 'onClick');
              var hasChangeAction = get(component, 'onChange');
              if (hasClickAction || hasChangeAction) {
                var bubbles = get(component, 'bubbles');
                if (isEmpty(bubbles)) {
                  set(component, 'bubbles', false);
                }
              }
            });
          }
          // Init complete. We don't want it to run again
          // for that particular component.
          set(component, 'isProxyHandlerSet', true);
        })();
      }
    });
  }
});