const discord = require("discord.js");

module.exports.run = async(bot, message, args, options) => {
    var textMessage = "";
    options.active.get(message.guild.id).queue.forEach(element => console.log(element.songTitle));
    console.log(textMessage);
    console.log(options.active.get(message.guild.id).queue);
    message.channel.send(textMessage);
}

module.exports.help = {
    name: "showQueue"
}