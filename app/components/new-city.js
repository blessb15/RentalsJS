import Ember from 'ember';

export default Ember.Component.extend({
  addNewCityFormIsShowing: false,
  actions: {
    cityFormShow (){
      this.set('addNewCityFormIsShowing', true);

    },
    saveCity(){
      var params = {
        name: this.get('name'),
        country: this.get('country'),
      }

      this.set('addNewCityFormIsShowing', false);
      this.sendAction('saveCity', params);
    }
  }
});
