const fetch = require('node-fetch');
const getRandomNum = require('../util.js');

module.exports = {
    name: "gif",
    description: "📹 Gets a gif.",
    args: false,
    usage: "<keyword (defaults to 'tree')> <keyword> ...",
    async execute(msg, args) {
        let keywords = 'tree';
        if (args.length > 0) {
            keywords = args.join(" ");
        }

        if (keywords.includes("tayne")) {
            keywords = "paul rudd computer";
        }

        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&contentfilter=low`
        let response = await fetch(url);
        let json = await response.json();
        const index = getRandomNum(json.results.length);
        msg.channel.send(json.results[index].url)
    },
}