module.exports.run = async(bot, message, args, options) => {
    if(!message.member.voice.channel) return message.channel.send("You aren't connected, so you can't play with me");

    if(!message.guild.me.voice.channel) return message.channel.send("Go fuck yourself, please eat from me\n UWUWUW xd xD");

    if(message.guild.me.voice.channelID != message.member.voice.channelID) return message.channel.send("You aren't connected, so you can't play with me");

    message.guild.me.voice.channel.leave();

    var data = options.active.get(message.guild.id).queue = [];
    // data.queue = [];
    console.log(options);

    message.channel.send("Later bitch");
}

module.exports.help = {
    name: "hugoLeave",
    description: "hugobot music command, let hugo leave the channel he is currently in"
}