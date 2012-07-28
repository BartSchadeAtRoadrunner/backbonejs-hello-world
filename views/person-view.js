var PersonView = Backbone.View.extend({

    template: _.template($('#person-view-template').html()),

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }

});