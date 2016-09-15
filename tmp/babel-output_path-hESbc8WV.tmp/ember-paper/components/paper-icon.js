define('ember-paper/components/paper-icon', ['exports', 'ember', 'ember-paper/mixins/color-mixin'], function (exports, _ember, _emberPaperMixinsColorMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var Str = _ember['default'].String;

  /**
   * @class PaperIcon
   * @extends Ember.Component
   * @uses ColorMixin
   */
  var PaperIconComponent = Component.extend(_emberPaperMixinsColorMixin['default'], {
    tagName: 'md-icon',
    classNames: ['paper-icon', 'md-font', 'material-icons', 'md-default-theme'],
    classNameBindings: ['spinClass'],
    attributeBindings: ['aria-label', 'title', 'sizeStyle:style'],

    icon: '',
    spin: false,
    reverseSpin: false,

    iconClass: computed('icon', 'positionalIcon', function () {
      var icon = this.getWithDefault('positionalIcon', this.get('icon'));
      return icon;
    }),

    'aria-label': computed.reads('iconClass'),

    spinClass: computed('spin', 'reverseSpin', function () {
      if (this.get('spin')) {
        return 'md-spin';
      } else if (this.get('reverseSpin')) {
        return 'md-spin-reverse';
      }
    }),

    sizeStyle: computed('size', function () {
      var size = this.get('size');

      if (size) {
        return Str.htmlSafe('height: ' + size + 'px; font-size: ' + size + 'px;');
      }
    })
  });

  PaperIconComponent.reopenClass({
    positionalParams: ['positionalIcon']
  });

  exports['default'] = PaperIconComponent;
});