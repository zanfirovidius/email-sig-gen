/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;

// TODO Move to constants?
var ITEM_HEIGHT = 41;
var MAX_HEIGHT = 5.5 * ITEM_HEIGHT;
var MENU_PADDING = 8;

/**
 * @class PaperAutocompleteList
 * @extends Ember.Component
 */
export default Component.extend({
  util: Ember.inject.service(),

  tagName: 'ul',
  classNames: ['md-default-theme', 'md-autocomplete-suggestions', 'md-whiteframe-z1'],
  attributeNameBindings: ['role'],
  role: 'presentation',
  stickToElement: null,

  init: function init() {
    this._super.apply(this, arguments);
    this._resizeWindowEvent = Ember.run.bind(this, this.resizeWindowEvent);
  },

  mouseEnter: function mouseEnter() {
    this.sendAction('mouse-enter');
  },

  mouseLeave: function mouseLeave() {
    this.sendAction('mouse-leave');
  },

  mouseUp: function mouseUp() {
    this.sendAction('mouse-up');
  },

  // TODO reafactor into a computed property that binds directly to dropdown's `style`
  positionDropdown: function positionDropdown() {
    var hrect = Ember.$('#' + this.get('wrapToElementId'))[0].getBoundingClientRect();
    var vrect = hrect;
    var root = document.body.getBoundingClientRect();
    var top = vrect.bottom - root.top;
    var bot = root.bottom - vrect.top;
    var left = hrect.left - root.left;
    var width = hrect.width;

    var styles = {
      left: left + 'px',
      minWidth: width + 'px',
      maxWidth: Math.max(hrect.right - root.left, root.right - hrect.left) - MENU_PADDING + 'px'
    };
    var ul = this.$();

    if (top > bot && root.height - hrect.bottom - MENU_PADDING < MAX_HEIGHT) {
      styles.top = 'auto';
      styles.bottom = bot + 'px';
      styles.maxHeight = Math.min(MAX_HEIGHT, hrect.top - root.top - MENU_PADDING) + 'px';
    } else {
      styles.top = top + 'px';
      styles.bottom = 'auto';
      styles.maxHeight = Math.min(MAX_HEIGHT, root.bottom - hrect.bottom - MENU_PADDING) + 'px';
    }
    ul.css(styles);
    correctHorizontalAlignment();

    /*
     * Makes sure that the menu doesn't go off of the screen on either side.
     */
    function correctHorizontalAlignment() {
      var dropdown = ul[0].getBoundingClientRect();
      var styles = {};
      if (dropdown.right > root.right - MENU_PADDING) {
        styles.left = hrect.right - dropdown.width + 'px';
      }
      ul.css(styles);
    }
  },

  observeIndex: Ember.observer('selectedIndex', function () {
    var suggestions = this.get('suggestions');
    if (!suggestions || !suggestions.objectAt(this.get('selectedIndex'))) {
      return;
    }

    var ul = this.$();
    var li = ul.find('li:eq(' + this.get('selectedIndex') + ')').get(0);
    var top = li.offsetTop;
    var bot = top + li.offsetHeight;
    var hgt = ul[0].clientHeight;

    if (top < ul[0].scrollTop) {
      ul[0].scrollTop = top;
    } else if (bot > ul[0].scrollTop + hgt) {
      ul[0].scrollTop = bot - hgt;
    }
  }),

  resizeWindowEvent: function resizeWindowEvent() {
    this.positionDropdown();
  },

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);

    // TODO refactor using ember-wormhole?
    var ul = this.$().detach();
    Ember.$('body').append(ul);
    Ember.$(window).on('resize', this._resizeWindowEvent);
    this.get('util').disableScrollAround(this.$());
    this.positionDropdown();
  },

  willDestroyElement: function willDestroyElement() {
    Ember.$(window).off('resize', this._resizeWindowEvent);
    this.get('util').enableScrolling();
  }

});