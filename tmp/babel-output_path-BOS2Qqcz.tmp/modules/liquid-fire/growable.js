import Ember from "ember";
import Promise from "liquid-fire/promise";
var capitalize = Ember.String.capitalize;

export default Ember.Mixin.create({
  growDuration: 250,
  growPixelsPerSecond: 200,
  growEasing: 'slide',
  growWidth: true,
  growHeight: true,

  transitionMap: Ember.inject.service('liquid-fire-transitions'),

  animateGrowth: function animateGrowth(elt, have, want) {
    var _this = this;

    this.get('transitionMap').incrementRunningTransitions();
    var adaptations = [];

    if (this.get('growWidth')) {
      adaptations.push(this._adaptDimension(elt, 'width', have, want));
    }

    if (this.get('growHeight')) {
      adaptations.push(this._adaptDimension(elt, 'height', have, want));
    }

    return Promise.all(adaptations).then(function () {
      _this.get('transitionMap').decrementRunningTransitions();
    });
  },

  _adaptDimension: function _adaptDimension(elt, dimension, have, want) {
    if (have[dimension] === want[dimension]) {
      return Promise.resolve();
    }
    var target = {};
    target['outer' + capitalize(dimension)] = [want[dimension], have[dimension]];
    return Ember.$.Velocity(elt[0], target, {
      duration: this._durationFor(have[dimension], want[dimension]),
      queue: false,
      easing: this.get('growEasing') || this.constructor.prototype.growEasing
    });
  },

  _durationFor: function _durationFor(before, after) {
    return Math.min(this.get('growDuration') || this.constructor.prototype.growDuration, 1000 * Math.abs(before - after) / (this.get('growPixelsPerSecond') || this.constructor.prototype.growPixelsPerSecond));
  }

});