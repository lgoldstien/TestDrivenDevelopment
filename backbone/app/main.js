define(function (require) {

    var symposia    = require('symposia');

    symposia.bus.addWireTap( function (data, event) {
        console.log("MSG: Channel: "+ event.channel +" Topic: "+ event.topic + " Timestamp: "+ event.timeStap);
        console.log(data);
    });

    require('app/routes/home');

    $(document).ready(function () {
        var sandbox = symposia.sandbox.create();
    });

    symposia.router.parse(document.location.pathname);

});