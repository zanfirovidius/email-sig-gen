define('ember-paper/components/paper-content', ['exports', 'ember', 'ember-paper/mixins/flex-mixin'], function (exports, _ember, _emberPaperMixinsFlexMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperContent
   * @extends Ember.Component
   * @uses FlexMixin
   */
  exports['default'] = Component.extend(_emberPaperMixinsFlexMixin['default'], {
    tagName: 'md-content',
    classNames: ['md-default-theme'],
    attributeBindings: ['layout-padding', 'scroll-y:md-scroll-y'],
    classNameBindings: ['padding:md-padding']
  });
});