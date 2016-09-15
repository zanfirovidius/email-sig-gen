define('email-signature-generator/app', ['exports', 'ember', 'email-signature-generator/resolver', 'ember-load-initializers', 'email-signature-generator/config/environment'], function (exports, _ember, _emailSignatureGeneratorResolver, _emberLoadInitializers, _emailSignatureGeneratorConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emailSignatureGeneratorConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emailSignatureGeneratorConfigEnvironment['default'].podModulePrefix,
    Resolver: _emailSignatureGeneratorResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emailSignatureGeneratorConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});