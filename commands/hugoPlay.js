const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async(bot, message, args) => {
    if(!message.member.voiceChannel) return message.channel.send("Hugo wants to see you are in a channel uWu");

    if(message.guild.me.voiceChannel) return message.channel.send("Hugo is already in another channel uWu xD LMAO\n:D:D:D:D:D");

    if(!args[0]) return message.channel.send("Hugo wants an URL UWUWUWUWUWUWUWUUWUWUWUWUW\nkill me");

    var validate = await ytdl.validateURL(args[0]);

    if(!validate) return message.channel.send("Hudo needs an valid URL UWUWUWUWUUWWUUWUWUUW\nend my suffering....\nplease.");

    var info = await ytdl.getInfo(args[0]);

    var options = { seek: 0, volume:1};

    var voiceConnection = message.member.voiceChannel.join()
    .then(voiceChannel => {
        var stream = ytdl(args[0], { filter: "audioonly"});
        var streamDispatch = voiceChannel.playStream(stream, options);
    })
    .catch(console.error);

    message.channel.send(`Hugo is now playing with his nipples AND\n${info.title}`);
}

module.exports.help = {
    name: "hugoPlay"
}