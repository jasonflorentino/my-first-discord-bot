const fs = require('fs');
const filename = 'leeroy.mp3'
const filepath = `./assets/${filename}`

module.exports = {
    name: 'leeroy',
    description: 'LEEEEROOOYYYYY JEENNNKIINNSS',
    args: false,
    usage: "[takes no arguments]",
    // aliases: ["charge"],
    async execute(message, args) {
        let connection;

        if (message.channel.type === 'dm') {
            return message.reply('I can\'t execute that command inside DMs!');
        }

        if (message.member.voice.channel) {
            connection = await message.member.voice.channel.join();

            // Create a dispatcher
            const dispatcher = connection.play(fs.createReadStream(filepath), { volume: 0.5 });
        
            dispatcher.on('start', () => {
                console.log(`${filename} is now playing!`);
            });
        
            dispatcher.on('finish', () => {
                console.log(`${filename} has finished playing!`);
            });
        
            // Always remember to handle errors appropriately!
            dispatcher.on('error', console.error);
        } else {
            return message.reply('You need to be in a voice channel in order for me to execute that command!');
        }
    },
};