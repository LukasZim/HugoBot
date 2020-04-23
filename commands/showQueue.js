const discord = require("discord.js");

module.exports.run = async(bot, message, args, options) => {
    console.log(options.active.get(454340635374387226).queue);
}

module.exports.help = {
    name: "showQueue"
}