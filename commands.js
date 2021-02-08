const bleepbloop = require('./commands/bleepbloop.js');
const eightball = require('./commands/eightball.js')
const gif = require('./commands/gif.js');
const roll = require('./commands/roll.js');
const tree = require('./commands/trees.js');
const help = require('./commands/help.js');
const { Message } = require('discord.js');

const prefix = "!"
const commands = { bleepbloop, eightball, gif, roll, tree, help };

module.exports = async function (msg) {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    let tokens = msg.content.split(' ');
    let command = tokens.shift();

    command = command.substring(1);
    if (command in commands) {
        console.log(`✨ Got a command! - ${command}`)
        commands[command](msg, tokens);
    } else {
        msg.channel.send('I don\'t know how to do that! 🤔')
    }
}