/**
 * @module ember-paper
 */
import Ember from 'ember';
import PaperMenuAbstract from './paper-menu-abstract';

var $ = Ember.$;
var Component = Ember.Component;
var service = Ember.inject.service;
var later = Ember.run.later;

/**
 * @class PaperMenuContentPane
 * @extends Ember.Component
 */
export default Component.extend({
  tagName: 'md-menu-content',

  constants: service(),

  classNames: ['md-default-theme'],
  classNameBindings: ['dense:md-dense'],
  attributeBindings: ['width'],
  width: 4,
  dense: false,

  // menuAbstract: Ember.computed(function() {
  //   let container = this.nearestOfType(PaperMenuAbstract);
  //   return container;
  // }),
  //
  keyDown: function keyDown(ev) {
    var KeyCodes = this.get('constants').KEYCODE;
    switch (ev.keyCode) {
      case KeyCodes.get('ESCAPE'):
        this.nearestOfType(PaperMenuAbstract).send('toggleMenu');
        break;
      case KeyCodes.get('UP_ARROW'):
        this.focusMenuItem(ev, -1);
        break;
      case KeyCodes.get('DOWN_ARROW'):
        this.focusMenuItem(ev, 1);
        break;
    }
  },

  didInsertElement: function didInsertElement() {
    var _this = this;

    // kick off initial focus in the menu on the first element
    later(function () {
      var focusTarget = _this.$().find('.md-menu-focus-target');
      if (!focusTarget.length) {
        focusTarget = _this.$().children().eq(0).children().eq(0);
      }
      focusTarget.focus();
    });
  },

  focusMenuItem: function focusMenuItem(e, direction) {
    var currentItem = $(e.target).closest('md-menu-item');

    var children = this.$().children();
    var items = $.makeArray(children);
    var currentIndex = children.index(currentItem);

    // Traverse through our elements in the specified direction (+/-1) and try to
    // focus them until we find one that accepts focus
    for (var i = currentIndex + direction; i >= 0 && i < items.length; i = i + direction) {
      var focusTarget = items[i].firstElementChild || items[i];
      var didFocus = this.attemptFocus(focusTarget);
      if (didFocus) {
        break;
      }
    }
  },
  attemptFocus: function attemptFocus(el) {
    if (el && el.getAttribute('tabindex') !== -1) {
      el.focus();
      if (document.activeElement === el) {
        return true;
      } else {
        return false;
      }
    }
  }

});