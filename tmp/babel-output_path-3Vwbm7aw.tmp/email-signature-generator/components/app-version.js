define('email-signature-generator/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'email-signature-generator/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emailSignatureGeneratorConfigEnvironment) {

  var name = _emailSignatureGeneratorConfigEnvironment['default'].APP.name;
  var version = _emailSignatureGeneratorConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});