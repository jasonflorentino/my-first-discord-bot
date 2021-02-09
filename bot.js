require('dotenv').config();

const token = process.env.BOT_TOKEN;
const prefix = process.env.PREFIX;

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

	// Clean up input
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	// Get command through name or alias
    const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	// Check if necessary arguments were given
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		
		return message.channel.send(reply);
	}

	// Try executing command
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});