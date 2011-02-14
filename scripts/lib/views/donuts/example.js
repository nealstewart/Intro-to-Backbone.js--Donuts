var ExampleDonutView = Backbone.View.extend({
  initialize : function() {
    this._donutView = new DonutView({
      model : this.model
    });

    this._updatingDonutView = new UpdatingDonutView({
      model : this.model
    });
  },

  events : {
    "click .name_changer" : "change"
  },

  change : function(evt) {
    console.log("event object", evt);
    var nameToSet = $(evt.srcElement).closest('a').data('donut_name');
    this.model.set({name : nameToSet});
    this.model.save();

    evt.preventDefault();
  }, 

  render : function() {
    this._donutView.el = this.$('#normal_donut_view')[0]
    this._donutView.render();

    this._updatingDonutView.el = this.$('#updating_donut_view')[0]
    this._updatingDonutView.render();

    return this;
  }
});
