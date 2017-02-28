import Ember from 'ember';
import ENV from 'bookmarker/config/environment';

export default Ember.Route.extend({
  model(){
    // alert(ENV.APP.title);
    return this.get('store').findAll('user');
  }
});
