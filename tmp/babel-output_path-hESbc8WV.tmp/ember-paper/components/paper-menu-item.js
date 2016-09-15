define('ember-paper/components/paper-menu-item', ['exports', 'ember', 'ember-paper/components/paper-menu-abstract'], function (exports, _ember, _emberPaperComponentsPaperMenuAbstract) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperMenuItem
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'md-menu-item',

    actions: {
      handleClick: function handleClick(event) {
        this.nearestOfType(_emberPaperComponentsPaperMenuAbstract['default']).send('toggleMenu');
        this.sendAction('onClick', event);
      }
    },
    mouseEnter: function mouseEnter() {
      if (!this.get('disabled')) {
        this.$('button').focus();
      }
    }

  });
});