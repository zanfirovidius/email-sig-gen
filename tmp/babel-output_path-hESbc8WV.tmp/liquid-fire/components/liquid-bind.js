define('liquid-fire/components/liquid-bind', ['exports', 'ember', 'liquid-fire/templates/components/liquid-bind'], function (exports, _ember, _liquidFireTemplatesComponentsLiquidBind) {
  'use strict';

  var LiquidBind = _ember['default'].Component.extend({
    layout: _liquidFireTemplatesComponentsLiquidBind['default'],
    tagName: '',
    positionalParams: ['value'] // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
  });

  LiquidBind.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidBind;
});