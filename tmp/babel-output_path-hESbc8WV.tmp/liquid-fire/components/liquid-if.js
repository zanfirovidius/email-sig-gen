define('liquid-fire/components/liquid-if', ['exports', 'ember', 'liquid-fire/ember-internals', 'liquid-fire/templates/components/liquid-if'], function (exports, _ember, _liquidFireEmberInternals, _liquidFireTemplatesComponentsLiquidIf) {
  'use strict';

  var LiquidIf = _ember['default'].Component.extend({
    positionalParams: ['predicate'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    layout: _liquidFireTemplatesComponentsLiquidIf['default'],
    tagName: '',
    helperName: 'liquid-if',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      var predicate = (0, _liquidFireEmberInternals.shouldDisplay)(this.getAttr('predicate'));
      this.set('showFirstBlock', this.inverted ? !predicate : predicate);
    }
  });

  LiquidIf.reopenClass({
    positionalParams: ['predicate']
  });

  exports['default'] = LiquidIf;
});