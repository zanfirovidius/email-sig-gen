/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;
var inject = Ember.inject;

/**
 * @class PaperSidenavToggle
 * @extends Ember.Component
 */
export default Component.extend({

  tagName: '',

  name: 'default',

  paperSidenav: inject.service(),

  toggle: function toggle() {
    this.get('paperSidenav').toggle(this.get('name'));
  }

});