const discord = require("discord.js");

module.exports.run = async(bot, message, args, options) => {
    var textMessage = "";
    options.active.get(message.guild.id).queue.forEach(element => textMessage = textMessage + element.songTitle + "\n");
    console.log(textMessage);
    console.log(options.active.get(message.guild.id).queue);
    message.channel.send(textMessage);
}

module.exports.help = {
    name: "showQueue"
}