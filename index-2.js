console.log('run peer 2');

const Peer = require('simple-peer');
const WebRTC = require('wrtc');

const peer1 = new Peer({initiator: true, wrtc: WebRTC});

peer1.on('signal', function (data) {
    console.log(data);
});

peer1.on('connect', function () {
    peer1.send('hi peer1, this is peer2');
});

peer1.on('data', function (data) {
    console.log('got a message from peer1: ' + data);
});