define('liquid-fire/components/liquid-sync', ['exports', 'ember', 'liquid-fire/templates/components/liquid-sync', 'liquid-fire/mixins/pausable'], function (exports, _ember, _liquidFireTemplatesComponentsLiquidSync, _liquidFireMixinsPausable) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend(_liquidFireMixinsPausable['default'], {
    tagName: '',
    layout: _liquidFireTemplatesComponentsLiquidSync['default'],
    didInsertElement: function didInsertElement() {
      this.pauseLiquidFire();
    },
    actions: {
      ready: function ready() {
        this.resumeLiquidFire();
      }
    }
  });
});