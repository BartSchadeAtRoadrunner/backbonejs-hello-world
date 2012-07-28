var PersonsListView = Backbone.View.extend({

    initialize: function() {
        this.model.bind("removePerson", this.removePerson, this);
    },

    template: _.template($('#persons-list-view-template').html()),

    render: function() {
        this.$el.html(this.template());

        var list = this.$el.find("ul");
        for(var i = 0; i < this.model.length; ++i) {
            var itemModel = this.model.at(i);
            var itemView = new PersonItemView({
                model: itemModel
            });
            list.append(itemView.$el);
        }
    },

    removePerson: function(person) {
        this.model.remove(person);
        this.render();
    }

});