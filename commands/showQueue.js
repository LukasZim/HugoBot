const discord = require("discord.js");

module.exports.run = async(bot, message, args, options) => {
    var textMessage = "";
    if(!options || !options.active || !options.active.get(message.guild.id) || !options.active.get(message.guild.id).queue) return message.channel.send("Queue is empty!");
    options.active.get(message.guild.id).queue.forEach(element => console.log(element.songTitle));
    //console.log(textMessage);
    console.log(options.active.get(message.guild.id).queue);
    //message.channel.send(textMessage);
}

module.exports.help = {
    name: "showQueue"
}