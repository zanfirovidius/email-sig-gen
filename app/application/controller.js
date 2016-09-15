import Ember from 'ember';

export default Ember.Controller.extend({
  model: [],
  code: false,

  actions: {
    viewTheCode() {
      this.set('code', !this.get('code'));
      console.log(this.get('code'));
    },
  }
});
