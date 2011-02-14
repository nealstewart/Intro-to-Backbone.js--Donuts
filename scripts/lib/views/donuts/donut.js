var DonutView = Backbone.View.extend({
  tagName : "div",
  className : "donut",

  render : function() {
    console.log("before", this.el.innerHTML);
    this.el.innerHTML = this.model.get('name');
    console.log(this.el.innerHTML);

    return this;
  }
});

var UpdatingDonutView = DonutView.extend({
  initialize : function(options) {
    this.render = _.bind(this.render, this); 
    this.model.bind('change:name', this.render);
    console.log(this.model);
  }
});

var RemovableUpdatingDonutView = UpdatingDonutView.extend({
  events : {
    "click .destroy" : "destroy"
  },

  destroy : function(evt) {
    this.model.destroy();
    evt.preventDefault();
  },

  render : function() {
    var destroyLink = this.make("a", {className : "destroy", href : "#"}, 'x');
    this.el.innerHTML = this.model.get('name');

    $(destroyLink).prependTo(this.el);

    return this;
  }
});
