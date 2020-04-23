const discord = require("discord.js");

module.exports.run = async(bot, message, args, options) => {
    console.log(options.active);
}

module.exports.help = {
    name: "showQueue"
}