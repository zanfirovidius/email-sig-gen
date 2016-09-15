define('email-signature-generator/tests/helpers/resolver', ['exports', 'email-signature-generator/resolver', 'email-signature-generator/config/environment'], function (exports, _emailSignatureGeneratorResolver, _emailSignatureGeneratorConfigEnvironment) {

  var resolver = _emailSignatureGeneratorResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emailSignatureGeneratorConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emailSignatureGeneratorConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});