define('ember-paper/utils/promise-proxies', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.promiseObject = promiseObject;
  exports.promiseArray = promiseArray;

  /**
   * @module ember-paper
   */

  var Promise = _ember['default'].RSVP.Promise;

  // See http://emberjs.com/api/data/classes/DS.PromiseArray.html
  var PromiseArray = _ember['default'].ArrayProxy.extend(_ember['default'].PromiseProxyMixin);
  exports.PromiseArray = PromiseArray;

  // See http://emberjs.com/api/data/classes/DS.PromiseObject.html
  var PromiseObject = _ember['default'].ObjectProxy.extend(_ember['default'].PromiseProxyMixin);

  exports.PromiseObject = PromiseObject;

  function promiseObject(promise, label) {
    return PromiseObject.create({
      promise: Promise.resolve(promise, label)
    });
  }

  function promiseArray(promise, label) {
    return PromiseArray.create({
      promise: Promise.resolve(promise, label)
    });
  }
});