
module.exports.run = async(bot, message, args, options) => {
    if(!options || !options.active || !options.active.get(message.guild.id) || !options.active.get(message.guild.id).queue) return message.channel.send("Queue is empty!");


    var data = options.active.get(message.guild.id);
    if(!data.dispatcher) return message.channel.send("No song playing");
    if(!(message.member.voice.channel.id == bot.guilds.cache.get(data.dispatcher.guildID).me.voice.channel.id)) return message.channel.send("GET OVER HERE");
    data.dispatcher.end();
}

module.exports.help = {
    name: "hugoSkip",
    description: "hugobot music command, skips the current song (hopefully)"
}