define("liquid-fire/transitions/to-down", ["exports", "liquid-fire/transitions/move-over"], function (exports, _liquidFireTransitionsMoveOver) {
  "use strict";

  exports["default"] = function (opts) {
    return _liquidFireTransitionsMoveOver["default"].call(this, 'y', 1, opts);
  };
});