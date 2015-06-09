
// INFORMATION DISPLAYED ON INDEX:

  Chirp.Router.map(function(){
    this.resource('chirp', {path: '/'}, function() {
      this.resource('new-post');
    });
  });
