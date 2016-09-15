define('email-signature-generator/router', ['exports', 'ember', 'email-signature-generator/config/environment'], function (exports, _ember, _emailSignatureGeneratorConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emailSignatureGeneratorConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});