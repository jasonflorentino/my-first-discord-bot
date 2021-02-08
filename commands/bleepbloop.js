const getRandomNum = require('../util.js');

const replies = [
    '⚡️🤖🌈',
    '💖',
    'I\'m a robot!',
    'beep beep boop boop!',
    'Hello, World!'
]

module.exports = {
    name: 'bleepbloop',
    description: 'bleepbloop',
    execute(msg, args) {
        const index = getRandomNum(replies.length);
        msg.channel.send(replies[index]);
    },
};