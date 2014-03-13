require.config({
    basePath: '.',
    packages: [
        'app/src/tasks'
    ],
    shim: {
        'app/main'          : ['backbone', 'bootstrap', 'symposia', 'localstorage'],
        'bootstrap'         : ['jquery'],
        'backbone'          : ['underscore'],
        'localstorage'      : ['backbone']
    },
    paths: {
        text                : 'vendor/requirejs-plugins/lib/text',
        json                : 'vendor/requirejs-plugins/src/json',
        backbone            : 'vendor/backbone/backbone',
        jquery              : 'vendor/jquery/jquery.min',
        underscore          : 'vendor/lodash/dist/lodash.min',
        bootstrap           : 'vendor/bootstrap/dist/js/bootstrap',
        localstorage        : 'vendor/backbone.localStorage/backbone.localStorage-min',
        symposia            : 'vendor/symposia/dist/symposia'
    }
});

require(['app/main']);