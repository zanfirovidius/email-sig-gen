import Ember from 'ember';
import layout from "liquid-fire/templates/components/illiquid-model";

var IlliquidModel = Ember.Component.extend({
  layout: layout,
  tagName: '',
  didReceiveAttrs: function didReceiveAttrs() {
    if (!this.get('_fixedModel')) {
      this.set('_fixedModel', this.get('model'));
    }
  }
});

IlliquidModel.reopenClass({
  positionalParams: ['model']
});

export default IlliquidModel;