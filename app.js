var ExpressPeerServer = require('peer').ExpressPeerServer;
var peerExpress = require('express');

var peerApp = peerExpress();
var peerServer = require('http').Server(peerApp);
var options = { debug: true }
var peerPort = process.env.PORT || 443;

peerApp.use('/', ExpressPeerServer(peerServer, options));

peerServer.listen(peerPort,()=>{
    console.log("server running");
})
 