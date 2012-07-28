var CreatePersonView = Backbone.View.extend({

    initialize: function() {
        this.router = this.options.router;
        this.render();
    },

    template: _.template($('#person-create-template').html()),

    events: {
        "click .cancel": "cancel",
        "click .save": "save"
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    },

    cancel: function() {
        this.router.navigate("persons", { trigger: true });
    },

    save: function() {
        console.log("save clicked");

        this.model.set({
            name: this.$el.find(".name").val(),
            age: this.$el.find(".age").val()
        });

        var personId = this.router.createNewPerson(this.model);
        console.log("created person #" + personId);

        this.router.navigate("persons/" + personId, { trigger: true });
    }

});