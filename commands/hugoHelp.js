const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let arr = Array.from(bot.commands.keys());
    console.log(bot.commands.values());
    let str = "";
    for (cur in Array.from(bot.commands.values())) {
        str += cur.help.name + ": " + cur.help.description;
    }
    message.channel.send(str)
}

module.exports.help = {
    name: "hugoHelp",
    description: "shows you all possible commands"
}