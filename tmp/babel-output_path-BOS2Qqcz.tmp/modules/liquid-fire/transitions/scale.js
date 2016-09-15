

export default scale;
import { animate } from "liquid-fire";
function scale() {
  var _this = this;

  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return animate(this.oldElement, { scale: [0.2, 1] }, opts).then(function () {
    return animate(_this.newElement, { scale: [1, 0.2] }, opts);
  });
}