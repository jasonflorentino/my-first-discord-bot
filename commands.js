const bleepbloop = require('./commands/bleepbloop.js');
const eightball = require('./commands/eightball.js')
const gif = require('./commands/gif.js');
const roll = require('./commands/roll.js');
const tree = require('./commands/trees.js');
const help = require('./commands/help.js');

const commands = { bleepbloop, eightball, gif, roll, tree, help };

module.exports = async function (msg) {
    let tokens = msg.content.split(' ');
    let command = tokens.shift();

    if (command.charAt(0) === '!') {
        command = command.substring(1);
        if (command in commands) {
            commands[command](msg, tokens);
        } else {
            msg.channel.send('I don\'t know how to do that! 🤔')
        }
    }
}