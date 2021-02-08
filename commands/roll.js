const getRandomNum = require('../util.js');

module.exports = {
    name: "roll",
    description: "roll",
    execute(msg, args) {
        console.log(args);
        const newList = cleanArgs(args);

        let total = 0;
        let message = "";

        [ '1d8', '5d6', '3' ]

        for (let i = 0; i < newList.length; i++) {
            element = newList[i]
            if (element.includes("d")) {
                [total, message] = parseRoll(element, total, message);
                message += "\n";
            } else {
                message += `Adding ${element}...\n`
                total += parseInt(element, 10);
            }
        }

        message += `The total is ${total}!`;

        
        if (message.length > 2000) {
            msg.channel.send(`That's too many rolls to put in one Discord message, but the total I got was ${total}.`);
        } else {
            msg.channel.send(message);
        }
    },
}

function cleanArgs(list) {
    string = list.join("").toLowerCase();
    noPlus = string.split("+");
    return noPlus;
}

function parseRoll(element, curTotal, curMsg) {
    const timesPlusType = element.split("d");
    const numberOfRolls = timesPlusType[0];
    const numberOfSides = timesPlusType[timesPlusType.length - 1];

    for (let i = 0; i < numberOfRolls; i++) {
        curMsg += `Rolling a d${numberOfSides}... `
        const roll = rollDice(numberOfSides);
        curMsg += `${roll}!\n`;
        curTotal += roll;
    };

    return [curTotal,curMsg];
}

function rollDice(numString) {
    return getRandomNum(numString) + 1;
}