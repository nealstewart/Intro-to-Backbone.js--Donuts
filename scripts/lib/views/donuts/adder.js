var DonutAdder = Backbone.View.extend({
  events : {
    "submit" : "add"
  },

  add : function(evt) {
    var donutNameEl,
        donutName;

    donutNameEl = this.$('input');
    donutName = donutNameEl.val();
    donutNameEl.val('');

    this.collection.create({name : donutName});
    evt.preventDefault();
  }
});
