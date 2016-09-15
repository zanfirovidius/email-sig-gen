
export default crossFade;
// BEGIN-SNIPPET cross-fade-definition
import { animate, stop, Promise } from "liquid-fire";
function crossFade() {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  stop(this.oldElement);
  return Promise.all([animate(this.oldElement, { opacity: 0 }, opts), animate(this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts)]);
}

// END-SNIPPET