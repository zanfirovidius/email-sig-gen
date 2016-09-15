define('email-signature-generator/tests/helpers/start-app', ['exports', 'ember', 'email-signature-generator/app', 'email-signature-generator/config/environment'], function (exports, _ember, _emailSignatureGeneratorApp, _emailSignatureGeneratorConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emailSignatureGeneratorConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emailSignatureGeneratorApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});