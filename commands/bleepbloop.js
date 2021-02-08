const getRandomNum = require('../util.js');

const replies = [
    '⚡️🤖🌈',
    '💖',
    'I\'m a robot!',
    'beep beep boop boop!',
    'Hello, World!'
]

module.exports = function (msg, args) {
    const index = getRandomNum(replies.length);
    msg.channel.send(replies[index]);
};