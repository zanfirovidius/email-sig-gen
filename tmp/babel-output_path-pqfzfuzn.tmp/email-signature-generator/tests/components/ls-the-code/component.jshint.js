define('email-signature-generator/tests/components/ls-the-code/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/ls-the-code/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/ls-the-code/component.js should pass jshint.\ncomponents/ls-the-code/component.js: line 9, col 79, Missing semicolon.\ncomponents/ls-the-code/component.js: line 131, col 2, Missing semicolon.\ncomponents/ls-the-code/component.js: line 7, col 9, \'Clipboard\' is not defined.\n\n3 errors');
  });
});