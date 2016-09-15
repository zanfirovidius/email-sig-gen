/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;

/**
 * @class PaperAutocompleteHighlight
 * @extends Ember.Component
 */
export default Component.extend({
  tagName: 'span',
  flags: '',

  highlight: Ember.computed('searchText', 'label', 'flags', function () {
    var unsafeText = Ember.Handlebars.Utils.escapeExpression(this.get('label'));
    var text = unsafeText;
    var flags = this.get('flags');
    var regex = this.getRegExp(this.get('searchText'), flags);
    var html = text.replace(regex, '<span class="highlight">$&</span>');
    return new Ember.Handlebars.SafeString(html);
  }),

  sanitize: function sanitize(term) {
    if (!term) {
      return term;
    }
    return term.replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g, '\\$&');
  },

  getRegExp: function getRegExp(text, flags) {
    var str = '';
    if (flags.indexOf('^') >= 1) {
      str += '^';
    }
    str += text;
    if (flags.indexOf('$') >= 1) {
      str += '$';
    }
    return new RegExp(this.sanitize(str), flags.replace(/[\$\^]/g, ''));
  }

});