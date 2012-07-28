var EditPersonView = Backbone.View.extend({

    initialize: function() {
        this.router = this.options.router;
    },

    template: _.template($('#person-edit-template').html()),

    events: {
        "click .cancel": "cancel",
        "click .save": "save"
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    },

    cancel: function() {
        this.router.navigate("persons/" + this.model.get("id"), { trigger: true });
    },

    save: function() {
        console.log("save clicked for person #" + this.model.get("id"));
        this.model.set({
            name: this.$el.find(".name").val(),
            age: this.$el.find(".age").val()
        });
        console.log("after update id is " + this.model.get("id"));
        this.router.navigate("persons/" + this.model.get("id"), { trigger: true });
    }

});