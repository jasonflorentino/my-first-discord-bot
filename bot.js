require('dotenv').config();

const token = process.env.BOT_TOKEN;
const prefix = "!"

/* CREATE DISCORD CLIENT + LOGIN */

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(token);
client.on('ready', readyDiscord);
function readyDiscord() {
    console.log('💖 Ready!');
}

/* COMMAND NAME CREATION */

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

/* COMMAND HANDLING */

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});