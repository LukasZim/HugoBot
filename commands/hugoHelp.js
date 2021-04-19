const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    bot.commands.foreach(x => console.log(x));
    console.log("hugo is helpende");
}

module.exports.help = {
    name: "hugoHelp"
}