define('email-signature-generator/initializers/export-application-global', ['exports', 'ember', 'email-signature-generator/config/environment'], function (exports, _ember, _emailSignatureGeneratorConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emailSignatureGeneratorConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _emailSignatureGeneratorConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emailSignatureGeneratorConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});