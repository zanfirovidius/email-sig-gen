/**
 * @module ember-paper
 */
import Ember from 'ember';
import PaperInput from './paper-input';

var computed = Ember.computed;

/**
 * @class PaperSelect
 * @extends PaperInput
 */
export default PaperInput.extend({
  label: computed.alias('placeholder')
});