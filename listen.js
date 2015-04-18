// This script monitors the specified port for UDP datagrams.
var PORT = 65400;
var HOST = '0.0.0.0'; //0.0.0.0 to listen on the network, 127.0.0.1 to listen locally.

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);

});

server.bind(PORT, HOST);
