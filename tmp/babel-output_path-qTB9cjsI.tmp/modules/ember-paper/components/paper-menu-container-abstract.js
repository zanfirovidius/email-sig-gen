/**
 * @module ember-paper
 */
import Ember from 'ember';
import PaperMenuAbstract from './paper-menu-abstract';

var Component = Ember.Component;

/**
 * The paper-menu-container-abstract is responsible for animation and
 * positioning the menu or select or any other menu based component.
 *
 * @class PaperMenuContainerAbstract
 * @extends Ember.Component
 */
export default Component.extend({
  transitionEvents: Ember.inject.service(),
  constants: Ember.inject.service(),

  classNames: ['md-default-theme'],
  classNameBindings: ['interaction:md-clickable'],

  menuAbstract: Ember.computed(function () {
    var container = this.nearestOfType(PaperMenuAbstract);
    return container;
  }),

  _resizeHandler: Ember.computed(function () {
    var _this = this;

    return function () {
      _this.get('menuAbstract').registerWrapper(_this);
    };
  }),

  moveComponentToBody: Ember.on('didInsertElement', function () {
    var _self = this;
    var dom = this.$().detach();
    Ember.$('body').append(dom);

    var menuAbstract = this.get('menuAbstract');

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        menuAbstract.registerWrapper(_self);
        window.requestAnimationFrame(function () {
          _self.$().addClass('md-active');
          _self.set('alreadyOpen', true);
          _self.$()[0].style[_self.get('constants').get('CSS').TRANSFORM] = '';
        });
      });
    });

    // Register resize handler.
    Ember.$(window).on('resize', this.get('_resizeHandler'));
  }),

  willDestroyElement: function willDestroyElement() {
    // Destroy resize handler.
    Ember.$(window).off('resize', this.get('_resizeHandler'));
  },

  hideWrapper: function hideWrapper() {
    var _self = this;
    return new Ember.RSVP.Promise(function (resolve /*, reject*/) {
      _self.get('transitionEvents').addEndEventListener(_self.get('element'), function () {
        _self.$().removeClass('md-active');
        resolve();
      });
      _self.$().addClass('md-leave');
    });
  },

  actions: {
    toggleMenu: function toggleMenu() {
      this.get('menuAbstract').send('toggleMenu');
    }
  }
});