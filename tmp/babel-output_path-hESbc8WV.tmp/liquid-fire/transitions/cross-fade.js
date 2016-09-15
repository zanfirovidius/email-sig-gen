define("liquid-fire/transitions/cross-fade", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  "use strict";

  exports["default"] = crossFade;

  // BEGIN-SNIPPET cross-fade-definition

  function crossFade() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    (0, _liquidFire.stop)(this.oldElement);
    return _liquidFire.Promise.all([(0, _liquidFire.animate)(this.oldElement, { opacity: 0 }, opts), (0, _liquidFire.animate)(this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts)]);
  }

  // END-SNIPPET
});