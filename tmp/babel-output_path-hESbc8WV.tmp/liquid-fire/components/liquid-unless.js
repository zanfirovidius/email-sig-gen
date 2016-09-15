define('liquid-fire/components/liquid-unless', ['exports', 'liquid-fire/components/liquid-if'], function (exports, _liquidFireComponentsLiquidIf) {
  'use strict';

  exports['default'] = _liquidFireComponentsLiquidIf['default'].extend({
    helperName: 'liquid-unless',
    inverted: true
  });
});