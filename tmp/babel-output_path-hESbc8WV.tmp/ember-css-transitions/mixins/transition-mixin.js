define('ember-css-transitions/mixins/transition-mixin', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  var Mixin = _ember['default'].Mixin;
  var inject = _ember['default'].inject;
  var computed = _ember['default'].computed;
  var run = _ember['default'].run;

  var __DEV__ = _ember['default'].environment === 'development';
  var TICK = 17;
  var NO_EVENT_TIMEOUT = 5000;
  var noEventListener = null,
      EMPTY_ARRAY = [];

  if (__DEV__) {
    noEventListener = function () {
      _ember['default'].Logger.warn('transition(): tried to perform an animation without ' + 'an animationend or transitionend event after timeout (' + (NO_EVENT_TIMEOUT + 'ms). You should either disable this') + 'transition in JS or add a CSS animation/transition.');
    };
  }

  exports['default'] = Mixin.create({

    classNameBindings: ['joinedTransitionClasses'],

    joinedTransitionClasses: computed('transitionClasses.[]', function () {
      return this.get('transitionClasses').join(' ');
    }),

    addClass: function addClass(className, $element) {
      var _this = this;

      if (!this.get('isDestroying')) {
        run(function () {
          _this.get('transitionClasses').addObject(className);
        });
      } else {
        $element.addClass(className);
      }
    },

    removeClass: function removeClass(className, $element) {
      var _this2 = this;

      if (!this.get('isDestroying')) {
        run(function () {
          _this2.get('transitionClasses').removeObject(className);
        });
      } else {
        $element.removeClass(className);
      }
    },

    transitionEvents: inject.service('transition-events'),

    shouldTransition: computed.bool('transitionClass'),

    'transition-class': computed.alias('transitionClass'),

    init: function init() {
      this._super.apply(this, arguments);
      this.classNameQueue = [];
      this.transitionClasses = _ember['default'].A();
      this._setupTriggerObservers();
    },

    /**
     * Transitions a DOMElement.
     * @param DOMElement node Dom node to add transition classes to.
     * @param animationType The animation type, e.g. "enter" or "leave".
     * @param finishCallback The callback to use when transition was finished.
     */
    transitionDomNode: function transitionDomNode(node, transitionClass, animationType, finishCallback) {
      var _this3 = this;

      var $element = _ember['default'].$(node);

      if (!node) {
        if (finishCallback) {
          finishCallback();
        }
        return;
      }

      var className = transitionClass + '-' + animationType;
      var activeClassName = className + '-active';

      var noEventTimeout = null;

      var endListener = function endListener(e) {
        if (e && e.target !== node) {
          return;
        }
        if (__DEV__) {
          clearTimeout(noEventTimeout);
        }

        _this3.removeClass(className, $element);
        _this3.removeClass(activeClassName, $element);

        _this3.get('transitionEvents').removeEndEventListener(node, endListener);

        // Usually this optional callback is used for informing an owner of
        // a leave animation and telling it to remove the child.
        if (finishCallback) {
          finishCallback();
        }
      };

      this.get('transitionEvents').addEndEventListener(node, endListener);

      this.addClass(className, $element);

      // Need to do this to actually trigger a transition.
      this.queueClass($element, activeClassName);

      if (animationType === 'remove') {
        this.queueClass($element, transitionClass, 'remove');
      }

      if (__DEV__) {
        noEventTimeout = setTimeout(noEventListener, NO_EVENT_TIMEOUT);
      }
    },

    /**
     * Queues a class on a jQuery Element.
     * Sets a timeout based on TICK, after TICK is done it sets the classes on the $element.
     * @param $element
     * @param className
     */
    queueClass: function queueClass($element, className) {
      var _this4 = this;

      var op = arguments.length <= 2 || arguments[2] === undefined ? 'add' : arguments[2];

      this.classNameQueue.push({ op: op, className: className });

      if (!this.timeout) {
        this.timeout = run.later(function () {
          _this4.flushClassNameQueue($element);
        }, TICK);
      }
    },

    /**
     * Flushes queued classes on the $element given and resets the timer.
     * @param $element The element to apply classNameQueue on.
     */
    flushClassNameQueue: function flushClassNameQueue($element) {
      var _this5 = this;

      // Add classes one and one to ensure animation correctness: e.g.: x-enter, x-enter-active
      this.classNameQueue.forEach(function (_ref) {
        var className = _ref.className;
        var op = _ref.op;

        if (op === 'add') {
          _this5.addClass(className, $element);
        } else if (op === 'remove') {
          _this5.removeClass(className, $element);
        }
      });
      this.classNameQueue = [];
      this.timeout = null;
    },

    willDestroyElement: function willDestroyElement() {
      var _this6 = this;

      this._teardownTriggerObservers();
      if (this.get('shouldTransition')) {
        if (this.timeout) {
          run.cancel(this.timeout);
        }
        // This is currently the only way of doing this (since willDestroyElement is not promise based).
        var clone = this.$().clone();
        var parent = this.$().parent();
        var idx = parent.children().index(this.$());
        run.scheduleOnce('afterRender', function () {
          _this6.addDestroyedElementClone(parent, idx, clone);
          _this6.transitionDomNode(clone[0], _this6.get('transitionClass'), 'leave', function () {
            _this6.didTransitionOut(clone);
          });
        });
      }
    },

    /**
     * Default placement  of the cloned element when being destroyed.
     */
    addDestroyedElementClone: function addDestroyedElementClone(parent, idx, clone) {
      if (idx === 0) {
        parent.prepend(clone);
      } else {
        _ember['default'].$(parent.children()[idx - 1]).after(clone);
      }
    },

    /**
     * Called after transition in was done. Will always be called after didInsertElement.
     */
    didTransitionIn: _ember['default'].K,

    /**
     * Called when the transition out is called.
     * @param clone The cloned jQuery element. Normally .remove() should be called to remove the element after transition is done.
     */
    didTransitionOut: function didTransitionOut(clone) {
      clone.remove();
    },

    didInsertElement: function didInsertElement() {
      var _this7 = this;

      if (this.get('shouldTransition')) {
        run.scheduleOnce('afterRender', function () {
          _this7.transitionDomNode(_this7.get('element'), _this7.get('transitionClass'), 'enter', _this7.didTransitionIn);
        });
      }
    },

    /**
     * A list of properties that can control the transitions.  Functions just like
     * Ember.Component.classNameBindings, and can be formatted in the same way.
     *
     * @property transitionTriggers
     * @type Array
     * @default []
     * @public
     */
    transitionTriggers: EMPTY_ARRAY,

    _setupTriggerObservers: function _setupTriggerObservers() {
      var _this8 = this;

      this._observers = {};
      this.get('transitionTriggers').forEach(function (classExp) {
        var _classExp$split = classExp.split(':');

        var _classExp$split2 = _slicedToArray(_classExp$split, 2);

        var propName = _classExp$split2[0];
        var className = _classExp$split2[1];

        if (!className) {
          className = _ember['default'].String.dasherize(propName);
        }

        // create observer function
        _this8._observers[propName] = function () {
          var _this9 = this;

          var value = this.get(propName);
          if (value) {
            this.addClass(className, this.$());
            this.transitionDomNode(this.get('element'), className, 'add');
          } else {
            this.transitionDomNode(this.get('element'), className, 'remove', function () {
              _this9.removeClass(className, _this9.$());
            });
          }
        };

        // if value starts as true, add it immediatly
        var value = _this8.get(propName);
        if (value) {
          _this8.get('transitionClasses').addObject(className);
        }

        // add observer
        _this8.addObserver(propName, _this8, _this8._observers[propName]);
      });
    },

    _teardownTriggerObservers: function _teardownTriggerObservers() {
      var _this10 = this;

      if (this._observers) {
        this.get('transitionTriggers').forEach(function (classExp) {
          var _classExp$split3 = classExp.split(':');

          var _classExp$split32 = _slicedToArray(_classExp$split3, 1);

          var propName = _classExp$split32[0];

          _this10.removeObserver(propName, _this10, _this10._observers[propName]);
          delete _this10._observers[propName];
        });
      }
    }

  });
});