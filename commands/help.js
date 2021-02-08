module.exports = function (msg, args) {
    const reply = "✨ Here are some of the commands I know:\n`!gif      ` 📹 Gets a gif.\n`!eightball` 🎱 Answers a question from the magic eight ball.\n`!tree     ` 🌳 Gets a random tree.\n`!roll     ` 🎲 Rolls some dice.\n\n🤖 Usage info:\n`!gif <keywords (defaults to 'tree')>`\n`!eightball <question to be answered>`\n`!tree [takes no arguments]`\n`!roll <#rolls>d<#sides> + <modifier>`";
    msg.channel.send(reply);
}