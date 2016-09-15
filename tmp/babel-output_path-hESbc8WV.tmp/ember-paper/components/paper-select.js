define('ember-paper/components/paper-select', ['exports', 'ember', 'ember-paper/components/paper-input'], function (exports, _ember, _emberPaperComponentsPaperInput) {
  /**
   * @module ember-paper
   */
  'use strict';

  var computed = _ember['default'].computed;

  /**
   * @class PaperSelect
   * @extends PaperInput
   */
  exports['default'] = _emberPaperComponentsPaperInput['default'].extend({
    label: computed.alias('placeholder')
  });
});