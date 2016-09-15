/**
 * @module ember-paper
 */
import Ember from 'ember';
import BaseFocusable from './base-focusable';
import ColorMixin from 'ember-paper/mixins/color-mixin';
import FlexMixin from 'ember-paper/mixins/flex-mixin';
import ChildMixin from 'ember-paper/mixins/child-mixin';

import requiredValidator from 'ember-paper/validators/required';
import minValidator from 'ember-paper/validators/min';
import maxValidator from 'ember-paper/validators/max';
import minlengthValidator from 'ember-paper/validators/minlength';
import maxlengthValidator from 'ember-paper/validators/maxlength';

var $ = Ember.$;
var computed = Ember.computed;
var isArray = Ember.isArray;
var isEmpty = Ember.isEmpty;
var Logger = Ember.Logger;
var A = Ember.A;
var run = Ember.run;
var assert = Ember.assert;
var get = Ember.get;

/**
 * @class PaperInput
 * @extends BaseFocusable
 * @uses ChildMixin
 * @uses ColorMixin
 * @uses FlexMixin
 */
export default BaseFocusable.extend(ColorMixin, FlexMixin, ChildMixin, {
  tagName: 'md-input-container',
  classNames: ['md-default-theme'],
  classNameBindings: ['hasValue:md-input-has-value', 'isInvalidAndTouched:md-input-invalid', 'eitherIcon:md-has-icon', 'iconRight:md-icon-right', 'focused:md-input-focused', 'block:md-block'],
  type: 'text',
  autofocus: false,
  tabindex: null,
  hideAllMessages: false,
  isTouched: false,
  lastIsInvalid: undefined,

  hasValue: computed('value', 'isNativeInvalid', function () {
    var value = this.get('value');
    var isNativeInvalid = this.get('isNativeInvalid');
    return !isEmpty(value) || isNativeInvalid;
  }),

  inputElementId: computed('elementId', function () {
    return 'input-' + this.get('elementId');
  }),

  /**
   * The result of isInvalid is appropriate for controlling the display of
   * validation error messages. It also may be used to distinguish whether
   * the input would be considered valid after it is touched.
   *
   * @public
   *
   * @return {boolean} Whether the input is or would be invalid.
   *    false: input is valid (touched or not), or is no longer rendered
   *    true: input has been touched and is invalid.
   */
  isInvalid: computed.or('validationErrorMessages.length', 'isNativeInvalid'),
  isValid: computed.not('isInvalid'),

  isInvalidAndTouched: computed.and('isInvalid', 'isTouched'),

  renderCharCount: computed('value', function () {
    var currentLength = this.get('value') ? this.get('value').length : 0;
    return currentLength + '/' + this.get('maxlength');
  }),

  eitherIcon: computed.or('icon', 'iconRight'),

  /**
   * Return the built-in validations.
   *
   * May be overridden to provide additional built-in validations. Be sure to
   * call this._super() to retrieve the standard validations.
   *
   * @public
   */
  validations: function validations() {
    return [requiredValidator, minValidator, maxValidator, minlengthValidator, maxlengthValidator];
  },

  customValidations: [],
  errors: [],

  /**
   * Computed property that validate the input and return an array of error
   * objects, each with an ng-message code and an error message.
   *
   * @public
   */
  validationErrorMessages: computed('value', 'errors.[]', 'customValidations.[]', function () {
    var _this = this;

    var validations = A();
    var messages = A();

    // built-in validations
    validations.pushObjects(this.validations());

    // custom validations
    var customValidations = this.get('customValidations');
    assert('`customValidations` must be an array', isArray(customValidations));
    validations.pushObjects(customValidations);

    // execute validations
    var currentValue = this.get('value');
    validations.forEach(function (validation) {
      assert('validation must include an `validate(value)` function', validation && validation.validate && typeof validation.validate === 'function');
      try {
        var valParam = get(validation, 'param');
        var paramValue = valParam ? _this.get(valParam) : undefined;
        if (!validation.validate(currentValue, paramValue)) {
          var message = _this.get('errorMessages.' + valParam) || get(validation, 'message');
          messages.pushObject({
            message: Ember.String.loc(message.string || message, paramValue, currentValue)
          });
        }
      } catch (error) {
        Logger.error('Exception with validation: ', validation, error);
      }
    });

    // error messages array
    var errors = this.get('errors') || [];
    assert('`errors` must be an array', isArray(errors));
    messages.pushObjects(errors.map(function (e) {
      return get(e, 'message') ? e : { message: e };
    }));

    return messages;
  }),

  // Lifecycle hooks
  didReceiveAttrs: function didReceiveAttrs() {
    this._super.apply(this, arguments);
    assert('{{paper-input}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined);
    this.notifyValidityChange();
  },

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    if (this.get('textarea')) {
      $(window).on('resize.' + this.elementId, run.bind(this, this.growTextarea));
    }
  },

  didRender: function didRender() {
    this.growTextarea();
    // setValue below ensures that the input value is the same as this.value
    this.setValue(this.get('value'));
  },

  willClearRender: function willClearRender() {
    this.sendAction('onValidityChange', false);
  },

  willDestroyElement: function willDestroyElement() {
    if (this.get('textarea')) {
      $(window).off('resize.' + this.elementId);
    }
  },

  growTextarea: function growTextarea() {
    if (this.get('textarea')) {
      var inputElement = this.$('input, textarea');
      inputElement.addClass('md-no-flex').attr('rows', 1);

      var minRows = this.get('passThru.rows');

      if (minRows) {
        if (!this.lineHeight) {
          inputElement.get(0).style.minHeight = 0;
          this.lineHeight = inputElement.get(0).clientHeight;
          inputElement.get(0).style.minHeight = null;
        }

        var newRows = Math.round(Math.round(this.getHeight(inputElement) / this.lineHeight));
        var rowsToSet = Math.min(newRows, minRows);

        inputElement.css('height', this.lineHeight * rowsToSet + 'px').attr('rows', rowsToSet).toggleClass('md-textarea-scrollable', newRows >= minRows);
      } else {
        inputElement.css('height', 'auto');
        inputElement.get(0).scrollTop = 0;
        var height = this.getHeight(inputElement);
        if (height) {
          inputElement.css('height', height + 'px');
        }
      }

      inputElement.removeClass('md-no-flex');
    }
  },

  getHeight: function getHeight(inputElement) {
    var _inputElement$get = inputElement.get(0);

    var offsetHeight = _inputElement$get.offsetHeight;

    var line = inputElement.get(0).scrollHeight - offsetHeight;
    return offsetHeight + (line > 0 ? line : 0);
  },

  notifyValidityChange: function notifyValidityChange() {
    var isValid = this.get('isValid');
    var lastIsValid = this.get('lastIsValid');
    if (lastIsValid !== isValid) {
      this.sendAction('onValidityChange', isValid);
      this.set('lastIsValid', isValid);
    }
  },

  setValue: function setValue(value) {
    if (this.$('input, textarea').val() !== value) {
      this.$('input, textarea').val(value);
    }
  },

  actions: {
    handleInput: function handleInput(e) {
      var _this2 = this;

      this.sendAction('onChange', e.target.value);
      // setValue below ensures that the input value is the same as this.value
      run.next(function () {
        _this2.setValue(_this2.get('value'));
      });
      this.growTextarea();
      var inputElement = this.$('input').get(0);
      this.set('isNativeInvalid', inputElement && inputElement.validity && inputElement.validity.badInput);
      this.notifyValidityChange();
    },

    handleBlur: function handleBlur(e) {
      this.sendAction('onBlur', e);
      this.set('isTouched', true);
      this.notifyValidityChange();
    }
  }
});