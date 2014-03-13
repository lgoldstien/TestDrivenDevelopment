define(function (require) {

    var Tasks           = require('app/src/tasks'),
        symposia        = require('symposia');

    var sandbox = symposia.sandbox.create();

    symposia.router.addRoute("/", function () {
        symposia.modules.create({
            'tasks': {
                creator: Tasks
            }
        }).startAll();
    });
});