const discord = require("discord.js");

module.exports.run = async(bot, message, args, options) => {
    console.log(options.active.get(message.guild.guildID));
}

module.exports.help = {
    name: "showQueue"
}