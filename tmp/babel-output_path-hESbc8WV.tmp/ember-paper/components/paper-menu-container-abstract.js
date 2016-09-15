define('ember-paper/components/paper-menu-container-abstract', ['exports', 'ember', 'ember-paper/components/paper-menu-abstract'], function (exports, _ember, _emberPaperComponentsPaperMenuAbstract) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * The paper-menu-container-abstract is responsible for animation and
   * positioning the menu or select or any other menu based component.
   *
   * @class PaperMenuContainerAbstract
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    transitionEvents: _ember['default'].inject.service(),
    constants: _ember['default'].inject.service(),

    classNames: ['md-default-theme'],
    classNameBindings: ['interaction:md-clickable'],

    menuAbstract: _ember['default'].computed(function () {
      var container = this.nearestOfType(_emberPaperComponentsPaperMenuAbstract['default']);
      return container;
    }),

    _resizeHandler: _ember['default'].computed(function () {
      var _this = this;

      return function () {
        _this.get('menuAbstract').registerWrapper(_this);
      };
    }),

    moveComponentToBody: _ember['default'].on('didInsertElement', function () {
      var _self = this;
      var dom = this.$().detach();
      _ember['default'].$('body').append(dom);

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
      _ember['default'].$(window).on('resize', this.get('_resizeHandler'));
    }),

    willDestroyElement: function willDestroyElement() {
      // Destroy resize handler.
      _ember['default'].$(window).off('resize', this.get('_resizeHandler'));
    },

    hideWrapper: function hideWrapper() {
      var _self = this;
      return new _ember['default'].RSVP.Promise(function (resolve /*, reject*/) {
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
});