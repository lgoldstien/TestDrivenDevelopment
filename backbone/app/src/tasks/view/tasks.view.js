define( function (require) {

    var TasksTemplate   = require('text!../template/tasks.template.html');
    var NewTaskTemplate = require('text!../template/newtask.template.html');

    var $countTodo      = $('.task_count.todo');
    var $countDone      = $('.task_count.done');

    return Backbone.View.extend({
        className: '',
        template: TasksTemplate,
        initialize: function () {},
        render: function () {
            this.$el.empty();
            this.$el.html(_.template(this.template, { tasks: this.collection }));

            $('.taskDelete').on('click', this.handleTaskDelete.bind(this));
            $('.taskEdit').on('click', this.handleTaskEdit.bind(this));
            $('.taskComplete').on('click', this.handleTaskComplete.bind(this));

            $countTodo.html(
                this.collection.where({ done: false }).length +
                this.collection.where({ done: undefined}).length
            );
            $countDone.html(this.collection.where({ done: true }).length);

            return this;
        },
        newTaskDialogue: function () {
            $('body').append(_.template(NewTaskTemplate, {}));
            $('#newTaskDialogue').modal();
            $('#newTaskDialogue').on('hidden.bs.modal', this.cancelNewTaskDialogue.bind(this));
        },
        cancelNewTaskDialogue: function () {
            $('#newTaskDialogue').remove();
        },
        handleTaskDelete: function () {
        },
        handleTaskEdit: function () {
        },
        handleTaskComplete: function () {
        }
    });

});