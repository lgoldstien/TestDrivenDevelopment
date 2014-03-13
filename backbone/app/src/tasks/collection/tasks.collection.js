define(function (require) {

    /** models */
    var TaskModel = require('../model/task.model');

    return Backbone.Collection.extend({
        model: TaskModel,
        localStorage: new Backbone.LocalStorage("TasksCollection"),
        comparator: function (x, y) {
            if ((x.get('done') === false || x.get('done') === undefined) && y.get('done') === true) {
                return -1;
            }
            if (x.get('done') === true && (y.get('done') === false || y.get('done') === undefined)) {
                return 1;
            }
        },
        add: function (model, options) {
            model.date = new Date();
            return this.set(model, _.extend({merge: false}, options, {add: true, remove: false}));
        },
        save: function () {
            this.each(function(model){
                model.save();
            });
            return this;
        }
    });
});