const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let arr = Array.from(bot.commands.keys());
    console.log(arr);
    message.channel.send(arr.join("\n"))
}

module.exports.help = {
    name: "hugoHelp"
}