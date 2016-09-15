define('email-signature-generator/application/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    model: [],
    code: false,

    actions: {
      viewTheCode: function viewTheCode() {
        this.set('code', !this.get('code'));
        console.log(this.get('code'));
      }
    }
  });
});