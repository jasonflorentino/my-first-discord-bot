const fetch = require('node-fetch');
const getRandomNum = require('../util.js');

module.exports = {
    name: "gif",
    description: "gif",
    async execute(msg, args) {
        let keywords = 'tree';
        if (args.length > 0) {
            keywords = args.join(" ");
        }

        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&contentfilter=low`
        let response = await fetch(url);
        let json = await response.json();
        const index = getRandomNum(json.results.length);
        msg.channel.send(json.results[index].url)
    },
}