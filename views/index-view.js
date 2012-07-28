var IndexView = Backbone.View.extend({

    initialize: function() {
        this.render();
    },

    template: _.template($('#index-view-template').html()),

    render: function() {
        this.$el.html(this.template());
    }

});