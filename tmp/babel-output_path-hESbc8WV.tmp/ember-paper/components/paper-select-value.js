define('ember-paper/components/paper-select-value', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperSelectValue
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'md-select-value',
    classNames: ['md-select-value'],
    classNameBindings: ['isPlaceholder:md-select-placeholder'],

    isPlaceholder: _ember['default'].computed('value', function () {
      return !this.get('value');
    }),

    label: _ember['default'].computed('isPlaceholder', function () {
      if (this.get('isPlaceholder')) {
        return this.get('placeholder');
      } else {
        return this.get('value');
      }
    })

  });
});