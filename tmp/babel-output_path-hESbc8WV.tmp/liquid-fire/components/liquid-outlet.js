define('liquid-fire/components/liquid-outlet', ['exports', 'ember', 'liquid-fire/templates/components/liquid-outlet'], function (exports, _ember, _liquidFireTemplatesComponentsLiquidOutlet) {
  'use strict';

  var LiquidOutlet = _ember['default'].Component.extend({
    layout: _liquidFireTemplatesComponentsLiquidOutlet['default'],
    positionalParams: ['inputOutletName'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      this.set('outletName', this.attrs.inputOutletName || 'main');
    }
  });

  LiquidOutlet.reopenClass({
    positionalParams: ['inputOutletName']
  });

  exports['default'] = LiquidOutlet;
});