import Ember from 'ember';

export default function (ms) {
  var _this = this;

  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return new Ember.RSVP.Promise(function (resolve) {
    setTimeout(function () {
      resolve(_this.lookup(opts.then || 'default').call(_this));
    }, ms);
  });
}