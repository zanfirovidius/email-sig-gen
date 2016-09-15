

export default flyTo;
import { animate, Promise } from "liquid-fire";
function flyTo() {
  var _this = this;

  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (!this.newElement) {
    return Promise.resolve();
  } else if (!this.oldElement) {
    this.newElement.css({ visibility: '' });
    return Promise.resolve();
  }

  var oldOffset = this.oldElement.offset();
  var newOffset = this.newElement.offset();

  if (opts.movingSide === 'new') {
    var motion = {
      translateX: [0, oldOffset.left - newOffset.left],
      translateY: [0, oldOffset.top - newOffset.top],
      outerWidth: [this.newElement.outerWidth(), this.oldElement.outerWidth()],
      outerHeight: [this.newElement.outerHeight(), this.oldElement.outerHeight()]
    };
    this.oldElement.css({ visibility: 'hidden' });
    return animate(this.newElement, motion, opts);
  } else {
    var motion = {
      translateX: newOffset.left - oldOffset.left,
      translateY: newOffset.top - oldOffset.top,
      outerWidth: this.newElement.outerWidth(),
      outerHeight: this.newElement.outerHeight()
    };
    this.newElement.css({ visibility: 'hidden' });
    return animate(this.oldElement, motion, opts).then(function () {
      _this.newElement.css({ visibility: '' });
    });
  }
}