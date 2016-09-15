define('liquid-fire/mixins/pausable', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Mixin.create({
    _transitionMap: _ember['default'].inject.service('liquid-fire-transitions'),

    _initializeLiquidFirePauseable: _ember['default'].on('init', function () {
      this._lfDefer = [];
    }),
    pauseLiquidFire: function pauseLiquidFire() {
      var _this = this;

      var context = this.nearestWithProperty('_isLiquidChild');
      if (context) {
        (function () {
          var defer = new _ember['default'].RSVP.defer();
          var tmap = _this.get('_transitionMap');
          tmap.incrementRunningTransitions();
          defer.promise['finally'](function () {
            return tmap.decrementRunningTransitions();
          });
          _this._lfDefer.push(defer);
          context._waitForMe(defer.promise);
        })();
      }
    },
    resumeLiquidFire: _ember['default'].on('willDestroyElement', function () {
      var defer = this._lfDefer.pop();
      if (defer) {
        defer.resolve();
      }
    })
  });
});