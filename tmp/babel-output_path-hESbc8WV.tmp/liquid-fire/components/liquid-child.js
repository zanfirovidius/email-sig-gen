define('liquid-fire/components/liquid-child', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    classNames: ['liquid-child'],

    init: function init() {
      this._super();
      this._waitingFor = [];
    },

    didInsertElement: function didInsertElement() {
      var _this = this;

      var $container = this.$();
      if ($container) {
        $container.css('visibility', 'hidden');
      }
      this._waitForAll().then(function () {
        if (!_this.isDestroying) {
          _this._waitingFor = null;
          _this.sendAction('liquidChildDidRender', _this);
        }
      });
    },

    _isLiquidChild: true,
    _waitForMe: function _waitForMe(promise) {
      if (!this._waitingFor) {
        return;
      }
      this._waitingFor.push(promise);
      var ancestor = this.nearestWithProperty('_isLiquidChild');
      if (ancestor) {
        ancestor._waitForMe(promise);
      }
    },
    _waitForAll: function _waitForAll() {
      var _this2 = this;

      var promises = this._waitingFor;
      this._waitingFor = [];
      return _ember['default'].RSVP.Promise.all(promises).then(function () {
        if (_this2._waitingFor.length > 0) {
          return _this2._waitForAll();
        }
      });
    }

  });
});