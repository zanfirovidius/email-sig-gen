export { promiseObject };
export { promiseArray };
/**
 * @module ember-paper
 */
import Ember from 'ember';
var Promise = Ember.RSVP.Promise;

// See http://emberjs.com/api/data/classes/DS.PromiseArray.html
var PromiseArray = Ember.ArrayProxy.extend(Ember.PromiseProxyMixin);
export { PromiseArray };
// See http://emberjs.com/api/data/classes/DS.PromiseObject.html
var PromiseObject = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

export { PromiseObject };

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