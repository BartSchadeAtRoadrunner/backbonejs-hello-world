var PersonView = Backbone.View.extend({

    initialize: function() {
        this.render();
    },

    template: _.template($('#person-view-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }

});