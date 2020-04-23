const discord = require("discord.js");

module.exports.run = async(bot, message, args, options) => {
    var textMessage = "";
    if(!options || !options.active || !options.active.get(message.guild.id) || !options.active.get(message.guild.id).queue) return message.channel.send("Queue is empty!");
    console.log(options.active.get(message.guild.id).queue.length);
    console.log(typeof options.active.get(message.guild.id).queue)
    //console.log(textMessage);
    console.log(options.active.get(message.guild.id).queue);
    //message.channel.send(textMessage);
}

module.exports.help = {
    name: "showQueue"
}