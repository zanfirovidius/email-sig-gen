import Ember from 'ember';

export default Ember.Mixin.create({
  _transitionMap: Ember.inject.service('liquid-fire-transitions'),

  _initializeLiquidFirePauseable: Ember.on('init', function () {
    this._lfDefer = [];
  }),
  pauseLiquidFire: function pauseLiquidFire() {
    var _this = this;

    var context = this.nearestWithProperty('_isLiquidChild');
    if (context) {
      (function () {
        var defer = new Ember.RSVP.defer();
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
  resumeLiquidFire: Ember.on('willDestroyElement', function () {
    var defer = this._lfDefer.pop();
    if (defer) {
      defer.resolve();
    }
  })
});