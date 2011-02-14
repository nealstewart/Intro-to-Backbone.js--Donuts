var DonutShop = Backbone.Model.extend({
  defaults : {
    name : "Untitled"
  },

  initialize : function() {
    this.donuts = new Donuts;
    this.donuts.localStorage = new Store('donut_shops/' + this.id + "/donuts");
  }
});
