const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    console.log(bot.commands.keys())
}

module.exports.help = {
    name: "hugoHelp"
}