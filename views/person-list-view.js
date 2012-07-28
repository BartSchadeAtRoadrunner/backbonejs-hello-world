var PersonsListView = Backbone.View.extend({

    initialize: function() {
        console.log("person list view init, there are " + this.model.length + " persons");
        this.render();
    },

    template: _.template($('#persons-list-view-template').html()),

    render: function() {
        this.$el.html(this.template());
    }

});