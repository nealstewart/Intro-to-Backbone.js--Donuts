var UpdatingCollectionView = Backbone.View.extend({
  initialize : function(options) {
    _(this).bindAll('add', 'remove');
    this.handleOptions(options);

    this._childViews = [];

    this.collection.each(this.add);
    
    this.collection.bind('add', this.add);
    this.collection.bind('remove', this.remove);
    this.collection.bind('refresh', this.refresh);
  },

  handleOptions : function(options) {
    if (!options.childViewConstructor) throw "no child view constructor provided";
    if (!options.childViewTagName) throw "no child view tag name provided";

    this._childViewConstructor = options.childViewConstructor;
    this._childViewTagName = options.childViewTagName;

    options.add && (this.add = options.add);
    options.remove && (this.remove = options.remove);

    if (options.refresh) {
      this.refresh = options.refresh;
    } else {
      this.refresh = this.render
    }
  },

  add : function(model) {
    var childView = new this._childViewConstructor({
      tagName : this._childViewTagName,
      model : model
    });

    this._childViews.push(childView);

    if (this._rendered) {
      $(this.el).append(childView.render().el);
    }
  },

  remove : function(model) {
    var viewToRemove,
        childView,
        leftSide,
        rightSide;

    for (var i = 0, length = this._childViews.length; i < length; i++) {
      childView = this._childViews[i];

      if (childView.model === model) {
        viewToRemove = childView;
        break;
      }
    }

    leftSide = this._childViews.slice( 0, i );
    rightSide = this._childViews.slice( i + 1, length );

    this._childViews = leftSide.concat(rightSide);

    if (this._rendered) {
      $(childView.el).remove();
    }
  },

  render : function() {
    var that = this;
    this._rendered = true;

    this.$('*').remove();
    $(this.el).html('');

    _(this._childViews).each(function(childView) {
      $(that.el).append(childView.render().el);
    });

    return this;
  }
});
