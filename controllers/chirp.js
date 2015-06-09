// Chirp.PostsController = Ember.Controller.extend({
//   // // sortProperties: ['title']
//   // actions: {
//   //   sortByTitle: function() {
//   //     this.set('sortProperties', ['title']);
//   //   }
//   // }
// });



Chirp.ChirpController = Ember.ArrayController.extend({
  // sortProperties: ['title']
  actions: {
    sortByDate: function() {
      this.set('sortProperties', ['date']);
    }
  }
});
