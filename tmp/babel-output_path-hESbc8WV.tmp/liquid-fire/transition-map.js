define("liquid-fire/transition-map", ["exports", "liquid-fire/running-transition", "liquid-fire/dsl", "ember", "liquid-fire/action", "liquid-fire/constraints", "ember-getowner-polyfill"], function (exports, _liquidFireRunningTransition, _liquidFireDsl, _ember, _liquidFireAction, _liquidFireConstraints, _emberGetownerPolyfill) {
  "use strict";

  var TransitionMap = _ember["default"].Service.extend({
    init: function init() {
      this._super.apply(this, arguments);

      this.activeCount = 0;
      this.constraints = new _liquidFireConstraints["default"]();
      var owner = (0, _emberGetownerPolyfill["default"])(this);
      var config = owner._lookupFactory('transitions:main');
      if (config) {
        this.map(config);
      }
      if (_ember["default"].testing) {
        this._registerWaiter();
      }
    },

    runningTransitions: function runningTransitions() {
      return this.activeCount;
    },

    incrementRunningTransitions: function incrementRunningTransitions() {
      this.activeCount++;
    },

    decrementRunningTransitions: function decrementRunningTransitions() {
      var _this = this;

      this.activeCount--;
      _ember["default"].run.next(function () {
        _this._maybeResolveIdle();
      });
    },

    waitUntilIdle: function waitUntilIdle() {
      var _this2 = this;

      if (this._waitingPromise) {
        return this._waitingPromise;
      }
      return this._waitingPromise = new _ember["default"].RSVP.Promise(function (resolve) {
        _this2._resolveWaiting = resolve;
        _ember["default"].run.next(function () {
          _this2._maybeResolveIdle();
        });
      });
    },

    _maybeResolveIdle: function _maybeResolveIdle() {
      if (this.activeCount === 0 && this._resolveWaiting) {
        var resolveWaiting = this._resolveWaiting;
        this._resolveWaiting = null;
        this._waitingPromise = null;
        resolveWaiting();
      }
    },

    lookup: function lookup(transitionName) {
      var owner = (0, _emberGetownerPolyfill["default"])(this);
      var handler = owner._lookupFactory('transition:' + transitionName);
      if (!handler) {
        throw new Error("unknown transition name: " + transitionName);
      }
      return handler;
    },

    defaultAction: function defaultAction() {
      if (!this._defaultAction) {
        this._defaultAction = new _liquidFireAction["default"](this.lookup('default'));
      }
      return this._defaultAction;
    },

    constraintsFor: function constraintsFor(conditions) {
      if (conditions.rules) {
        var constraints = new _liquidFireConstraints["default"]();
        this.map(conditions.rules, constraints);
        return constraints;
      } else {
        return this.constraints;
      }
    },

    transitionFor: function transitionFor(conditions) {
      var action;
      if (conditions.use && conditions.firstTime !== 'yes') {
        action = new _liquidFireAction["default"](conditions.use);
        action.validateHandler(this);
      } else {
        var rule = this.constraintsFor(conditions).bestMatch(conditions);
        if (rule) {
          action = rule.use;
        } else {
          action = this.defaultAction();
        }
      }
      return new _liquidFireRunningTransition["default"](this, conditions.versions, action);
    },

    map: function map(handler, constraints) {
      if (handler) {
        handler.apply(new _liquidFireDsl["default"](this, constraints || this.constraints));
      }
      return this;
    },

    _registerWaiter: function _registerWaiter() {
      var self = this;
      this._waiter = function () {
        return self.runningTransitions() === 0;
      };
      _ember["default"].Test.registerWaiter(this._waiter);
    },

    willDestroy: function willDestroy() {
      if (this._waiter) {
        _ember["default"].Test.unregisterWaiter(this._waiter);
        this._waiter = null;
      }
    }

  });

  TransitionMap.reopenClass({
    map: function map(handler) {
      var t = TransitionMap.create();
      t.map(handler);
      return t;
    }
  });

  exports["default"] = TransitionMap;
});