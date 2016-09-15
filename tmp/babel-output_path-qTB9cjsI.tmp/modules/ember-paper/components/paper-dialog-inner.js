/**
 * @module ember-paper
 */
import Ember from 'ember';
import Translate3dMixin from '../mixins/translate3d-mixin';

var Component = Ember.Component;

/**
 * @class PaperDialogInner
 * @extends Ember.Component
 * @uses Translate3dMixin
 */
export default Component.extend(Translate3dMixin, {
  tagName: 'md-dialog',
  classNames: ['md-default-theme'],
  classNameBindings: ['contentOverflow:md-content-overflow', 'fullscreen:md-dialog-fullscreen'],

  onTranslateFromEnd: function onTranslateFromEnd() {
    if (this.get('focusOnOpen')) {
      var toFocus = this.$('[autofocus]').last();
      if (toFocus.length === 0) {
        toFocus = this.$('md-dialog-actions button').last();
      }
      toFocus.focus();
    }
  },

  onTranslateToEnd: function onTranslateToEnd($origin) {
    if ($origin) {
      $origin.focus();
    }
  },

  click: function click(ev) {
    if (this.get('clickOutsideToClose')) {
      ev.stopPropagation();
      return false;
    }
  }

});