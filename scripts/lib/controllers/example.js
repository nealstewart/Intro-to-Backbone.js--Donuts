ExampleController = Backbone.Controller.extend({
  routes : {
    "example/:type" : "example"
  },

  example : function(type) {
    $('.example').hide();
    $('.example.' + type).show();
  }
});
