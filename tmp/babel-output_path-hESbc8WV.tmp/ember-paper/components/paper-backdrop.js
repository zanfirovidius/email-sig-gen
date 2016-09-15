define('ember-paper/components/paper-backdrop', ['exports', 'ember', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _ember, _emberCssTransitionsMixinsTransitionMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var htmlSafe = _ember['default'].String.htmlSafe;

  /**
   * @class PaperBackdrop
   * @extends Ember.Component
   * @uses TransitionMixin
   */
  exports['default'] = Component.extend(_emberCssTransitionsMixinsTransitionMixin['default'], {

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
});