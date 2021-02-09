const getRandomNum = require('../util.js');

module.exports = {
    name: "eightball",
    description: "🎱 Answers a yes-or-no question.",
    args: true,
    usage: "<yes or no question>",
    execute(msg, args) {
        const index = getRandomNum(replies.length);
        msg.reply(replies[index]);
    },
}

const replies = [
    "As I see it, yes.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "It is certain.",
    "It is decidedly so.",
    "Most likely.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Outlook good.",
    "Reply hazy, try again.",
    "Signs point to yes.",
    "Very doubtful.",
    "Without a doubt.",
    "Yes.",
    "Yes – definitely.",
    "You may rely on it.",
]