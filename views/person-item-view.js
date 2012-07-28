var PersonItemView = Backbone.View.extend({

    initialize: function() {
        this.render();
    },

    template: _.template($('#person-item-view-template').html()),

    events: {
        "click button.delete": "kill"
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    },

    kill: function() {
        this.model.trigger("removePerson", this.model);
    }

});