define('email-signature-generator/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'email-signature-generator/tests/helpers/start-app', 'email-signature-generator/tests/helpers/destroy-app'], function (exports, _qunit, _emailSignatureGeneratorTestsHelpersStartApp, _emailSignatureGeneratorTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emailSignatureGeneratorTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emailSignatureGeneratorTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});