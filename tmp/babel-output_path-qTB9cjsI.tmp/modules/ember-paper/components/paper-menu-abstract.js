/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;
var inject = Ember.inject;
var assert = Ember.assert;

/**
 * @class PaperMenuAbstract
 * @extends Ember.Component
 */
export default Component.extend({
  constants: inject.service(),

  /* `isOpen` true when toggleMenu action is called, but only turns false when animation to hide the wrapper is done. */
  isOpen: false,

  /* Supports `getItems` that can return a promise, menu is not opened before this promise is resolved by the origin. */
  getItems: null,

  /* async: is true if promise was not resolved. */
  isLoading: false,

  /* cache async requests */
  cache: true,

  preventMenuOpen: false,

  setOpen: function setOpen(newState) {
    this.set('isOpen', newState);
    this.sendAction(newState ? 'onOpenMenu' : 'onCloseMenu');
  },

  actions: {

    toggleMenu: function toggleMenu() {
      var _this = this;

      if (this.get('isOpen')) {
        this.get('activeWrapper').hideWrapper().then(function () {
          _this.setOpen(false);
        });
      } else {
        if (this.get('preventMenuOpen')) {
          return;
        }
        if (this.get('getItems') && (!this.get('items') || !this.get('cache'))) {
          this.set('activeWrapper', null);
          this.set('isLoading', true);
          this.setOpen(true);
          var promise = this.get('getItems').call(this);
          promise.then(function (data) {
            _this.set('items', data);
            _this.set('isLoading', false);
          }, function () {
            _this.set('items', Ember.A([]));
            _this.setOpen(false);
            _this.set('isLoading', false);
          });
        } else {
          this.set('activeWrapper', null);
          this.setOpen(true);
        }
      }
    }
  },

  didReceiveAttrs: function didReceiveAttrs() {
    var _this2 = this;

    Ember.run.scheduleOnce('afterRender', function () {
      var wrapper = _this2.get('activeWrapper');
      if (wrapper && !wrapper.get('isDestroyed') && !wrapper.get('isDestroying')) {
        _this2.positionMenu(wrapper.$());
      }
    });
  },

  registerWrapper: function registerWrapper(component) {
    this.set('activeWrapper', component);
    this.positionMenu(component.$());
  },

  positionMenu: function positionMenu(el) {
    assert('Override positionMenu to create custom animation for the menu component: ' + el + ' ' + this.get('activeWrapper'));
  }

});