var App = Backbone.Router.extend({

    initialize: function() {
        console.log("init router");

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

        var indexView = new IndexView({
            el: "#content-placeholder"
        });
    },

    viewPersonsList: function() {
        console.log("at persons list");

        var personsListView = new PersonsListView({
            el: "#content-placeholder",
            model: this.persons
        });
    },

    viewPerson: function(personId) {
        console.log("at view person " + personId);

        var person = this.persons.get(personId);
        var personView = new PersonView({
            el: "#content-placeholder",
            model: person
        });
    },

    editPerson: function(personId) {
        console.log("at edit person " + personId);

        var person = this.persons.get(personId);
        var editPersonView = new EditPersonView({
            el: "#content-placeholder",
            model: person,
            router: this
        });
    },

    newPerson: function() {
        console.log("at new person");

        var person = new Person({
            id: null,
            name: "",
            age: ""
        });

        var createPersonView = new CreatePersonView({
            el: "#content-placeholder",
            model: person,
            router: this
        });
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