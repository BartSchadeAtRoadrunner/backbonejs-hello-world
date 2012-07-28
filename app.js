var App = Backbone.Router.extend({

    initialize: function() {
        console.log("init router");

        this.currentView = null;

        this.unusedPersonId = 1;

        this.persons = new PersonsCollection([
            { id: this.unusedPersonId++, name: "John Smith", age: 30 },
            { id: this.unusedPersonId++, name: "Bill Gates", age: 20 },
            { id: this.unusedPersonId++, name: "Loki 2302", age: 26 },
            { id: this.unusedPersonId++, name: "Joel de Guzman", age: 10 },
            { id: this.unusedPersonId++, name: "Andrei Alexandrescu", age: 50 }
        ]);
    },

    routes: {
        "": "index",
        "persons": "viewPersonsList",
        "persons/new": "newPerson",
        "persons/:id": "viewPerson",
        "persons/:id/edit": "editPerson"
    },

    index: function() {
        console.log("at index");

        var indexView = new IndexView();

        this.setCurrentView(indexView);
    },

    viewPersonsList: function() {
        console.log("at persons list");

        var personsListView = new PersonsListView({
            model: this.persons
        });

        this.setCurrentView(personsListView);
    },

    viewPerson: function(personId) {
        console.log("at view person " + personId);

        var person = this.persons.get(personId);
        var personView = new PersonView({
            model: person
        });

        this.setCurrentView(personView);
    },

    editPerson: function(personId) {
        console.log("at edit person " + personId);

        var person = this.persons.get(personId);
        var editPersonView = new EditPersonView({
            model: person,
            router: this
        });

        this.setCurrentView(editPersonView);
    },

    newPerson: function() {
        console.log("at new person");

        var person = new Person({
            id: null,
            name: "",
            age: ""
        });

        var createPersonView = new CreatePersonView({
            model: person,
            router: this
        });

        this.setCurrentView(createPersonView);
    },

    setCurrentView: function(view) {
        console.log("current view is " + this.currentView);

        if(this.currentView != null) {
            this.currentView.remove();
        }

        $("#content-placeholder").append(view.$el);

        view.render();
        this.currentView = view;
    },

    createNewPerson: function(person) {
        var newPersonId = this.unusedPersonId++;
        person.set("id", newPersonId);
        this.persons.add(person);
        return newPersonId;
    }

});

$(function() {
    var app = new App();
    Backbone.history.start();
});