require('dotenv').config();
const token = process.env.BOT_TOKEN;

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(token);

client.on('ready', readyDiscord);
function readyDiscord() {
    console.log('💖 Ready!');
}

const commandHandler = require("./commands");
client.on('message', commandHandler);