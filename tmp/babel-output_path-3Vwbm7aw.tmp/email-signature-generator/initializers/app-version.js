define('email-signature-generator/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'email-signature-generator/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emailSignatureGeneratorConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emailSignatureGeneratorConfigEnvironment['default'].APP.name, _emailSignatureGeneratorConfigEnvironment['default'].APP.version)
  };
});