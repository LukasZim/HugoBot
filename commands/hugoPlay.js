const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
    if (message.member.voice.channelID == null) return message.channel.send("Hugo wants to see you are in a channel uWu");

    if (message.guild.me.voice.channelID) return message.channel.send("Hugo is already in another channel uWu xD LMAO\n:D:D:D:D:D");

    if (!args[0]) return message.channel.send("Hugo wants an URL UWUWUWUWUWUWUWUUWUWUWUWUW\nkill me");

    var validate = await ytdl.validateURL(args[0]);

    if (!validate) return message.channel.send("Hugo needs an valid URL UWUWUWUWUUWWUUWUWUUW\nend my suffering....\nplease.");

    var info = await ytdl.getInfo(args[0]);

    var options = { volume: 1 };

    var voiceChannel = message.member.voice.channel;

    voiceChannel.join()
        .then(connection =>{
            console.log("play ittttttttttttt");
            //connection.play(ytdl(args[0], { quality: 'highestaudio'}));
        });

    message.channel.send(`Hugo is now playing with his nipples AND\n${info.title}`);
}

module.exports.help = {
    name: "hugoPlay"
}

