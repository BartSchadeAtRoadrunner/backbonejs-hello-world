var IndexView = Backbone.View.extend({

    template: _.template($('#index-view-template').html()),

    render: function() {
        console.log("indexview $el is " + this.$el);
        this.$el.html(this.template());
    }

});