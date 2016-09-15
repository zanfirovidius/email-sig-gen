define('ember-paper/components/paper-select-menu', ['exports', 'ember', 'ember-paper/components/paper-menu-abstract'], function (exports, _ember, _emberPaperComponentsPaperMenuAbstract) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  var searchStr = '';
  var clearSearchTimeout = undefined,
      optNodes = undefined,
      optText = undefined;
  var CLEAR_SEARCH_AFTER = 300;

  /**
   * @class PaperSelectMenu
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'md-select-menu',
    classNames: ['md-default-theme'],

    constants: _ember['default'].inject.service(),

    menuAbstract: _ember['default'].computed(function () {
      var container = this.nearestOfType(_emberPaperComponentsPaperMenuAbstract['default']);
      return container;
    }),

    keyDown: function keyDown(ev) {
      var KeyCodes = this.get('constants').KEYCODE;
      switch (ev.keyCode) {
        case KeyCodes.get('TAB'):
        case KeyCodes.get('ESCAPE'):
          this.get('menuAbstract').send('toggleMenu');
          break;
        case KeyCodes.get('UP_ARROW'):
          this.focusPrevOption();
          break;
        case KeyCodes.get('DOWN_ARROW'):
          this.focusNextOption();
          break;
        default:
          if (ev.keyCode >= 31 && ev.keyCode <= 90) {
            var optNode = this.optNodeForKeyboardSearch(ev);
            this.get('menuAbstract').set('focusedNode', optNode || this.get('menuAbstract').get('focusedNode'));
            if (optNode) {
              optNode.focus();
            }
          }
      }
    },

    optNodeForKeyboardSearch: function optNodeForKeyboardSearch(e) {
      if (clearSearchTimeout) {
        clearTimeout(clearSearchTimeout);
      }
      clearSearchTimeout = setTimeout(function () {
        clearSearchTimeout = undefined;
        searchStr = '';
        optText = undefined;
        optNodes = undefined;
      }, CLEAR_SEARCH_AFTER);
      searchStr += String.fromCharCode(e.keyCode);
      var search = new RegExp('^' + searchStr, 'i');
      if (!optNodes) {
        optNodes = this.$().find('md-option');
        optText = new Array(optNodes.length);
        optNodes.each(function (i, el) {
          optText[i] = el.textContent.trim();
        });
      }
      for (var i = 0; i < optText.length; ++i) {
        if (search.test(optText[i])) {
          return optNodes[i];
        }
      }
    },

    focusOption: function focusOption(direction) {
      var optionsArray = this.$().find('md-option').toArray();
      var index = optionsArray.indexOf(this.get('menuAbstract').get('focusedNode'));

      var newOption = undefined;

      do {
        if (index === -1) {
          // We lost the previously focused element, reset to first option
          index = 0;
        } else if (direction === 'next' && index < optionsArray.length - 1) {
          index++;
        } else if (direction === 'prev' && index > 0) {
          index--;
        }
        newOption = optionsArray[index];
        if (newOption.hasAttribute('disabled')) {
          newOption = undefined;
        }
      } while (!newOption && index < optionsArray.length - 1 && index > 0);

      if (newOption) {
        newOption.focus();
      }
      this.get('menuAbstract').set('focusedNode', newOption);
    },
    focusNextOption: function focusNextOption() {
      this.focusOption('next');
    },
    focusPrevOption: function focusPrevOption() {
      this.focusOption('prev');
    }

  });
});