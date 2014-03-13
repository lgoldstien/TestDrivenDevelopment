define( function (require) {

    var TasksView       = require("./view/tasks.view");
    var TasksCollection = require('./collection/tasks.collection');

    return function (sandbox) {
        return {
            init: function () {
                this.$el        = sandbox.getElement();
                this.collection = new TasksCollection();
                this.view       = new TasksView({
                    collection: this.collection,
                    el:         this.$el
                });
                
                $('.taskNew').on('click', this.handleTaskNew.bind(this));

                this.collection.on('add', this.collection.save);    
                this.collection.on('all', this.render.bind(this));

                this.collection.fetch();
                window.tasks = this.collection;
            },
            render: function () {
                this.view.render();
            },
            handleTaskNew: function () {
                this.view.newTaskDialogue(arguments);
            },
            destroy: function () { }
        };
    };
});