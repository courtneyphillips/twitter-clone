Chirp.NewPostController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['date'],
  actions: {
    addChirp: function() {
      var username = this.get('username');
      var id = chirps.length + 1
      var chirp = this.get('chirp');
      var newChirp = {
        username: username,
        date: new Date(),
        chirp: chirp,
      }
      chirps.insertAt(0,newChirp);
    }
  }
});
