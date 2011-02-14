var Donut = Backbone.Model.extend({
  defaults : {
    name : "Untitled",
    sparkles : false,
    cream_filled : false
  },
  localStorage : new Store("donuts")
});

var Donuts = Backbone.Collection.extend({
  model : Donut,
  localStorage : new Store("donuts")
});
