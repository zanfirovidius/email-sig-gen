define('ember-paper/components/paper-form', ['exports', 'ember', 'ember-paper/mixins/parent-mixin'], function (exports, _ember, _emberPaperMixinsParentMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;

  /**
   * @class PaperForm
   * @extends Ember.Component
   * @uses ParentMixin
   */
  exports['default'] = Component.extend(_emberPaperMixinsParentMixin['default'], {
    tagName: '',
    isValid: computed.not('isInvalid'),
    isInvalid: computed('childComponents.@each.isInvalid', function () {
      return this.get('childComponents').isAny('isInvalid');
    }),
    actions: {
      onValidityChange: function onValidityChange() {
        if (this.get('lastIsValid') !== this.get('isValid')) {
          this.sendAction('onValidityChange', this.get('isValid'));
          this.set('lastIsValid', this.get('isValid'));
        }
      },
      onSubmit: function onSubmit() {
        this.sendAction('onSubmit');
        this.get('childComponents').setEach('isTouched', false);
      }
    }
  });
});