Application = {
  initialize : function() {
    new ExampleController;
    Backbone.history.start();

    var exampleDonutView = new ExampleDonutView({
      model : new Donut({name : "Bostan Cream"}),
      el : $('.example.model_view')[0]
    });

    exampleDonutView.render();
  }
};

$(Application.initialize);
