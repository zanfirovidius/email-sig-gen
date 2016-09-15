define('ember-paper/components/paper-sidenav-toggle', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var inject = _ember['default'].inject;

  /**
   * @class PaperSidenavToggle
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({

    tagName: '',

    name: 'default',

    paperSidenav: inject.service(),

    toggle: function toggle() {
      this.get('paperSidenav').toggle(this.get('name'));
    }

  });
});