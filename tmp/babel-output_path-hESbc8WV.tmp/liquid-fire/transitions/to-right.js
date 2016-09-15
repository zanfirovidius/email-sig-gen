define("liquid-fire/transitions/to-right", ["exports", "liquid-fire/transitions/move-over"], function (exports, _liquidFireTransitionsMoveOver) {
  "use strict";

  exports["default"] = function (opts) {
    return _liquidFireTransitionsMoveOver["default"].call(this, 'x', 1, opts);
  };
});