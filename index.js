console.log('run pee 1');

const Peer = require('simple-peer');
const WebRTC = require('wrtc');

const peer2 = new Peer({wrtc: WebRTC});

peer2.on('signal', function (data) {
    console.log(data);
});

peer2.on('connect', function () {
    peer2.send('hi peer2, this is peer1');
});

peer2.on('data', function (data) {
    console.log('got a message from peer2: ' + data);
});
