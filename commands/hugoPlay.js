const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args) => {
    if (message.member.voice.channelID == null) return message.channel.send("Hugo wants to see you are in a channel uWu");

    if (message.guild.me.voice.channelID) return message.channel.send("Hugo is already in another channel uWu xD LMAO\n:D:D:D:D:D");

    if (!args[0]) return message.channel.send("Hugo wants an URL UWUWUWUWUWUWUWUUWUWUWUWUW\nkill me");

    let validate = await ytdl.validateURL(args[0]);

    if (!validate) return message.channel.send("Hugo needs an valid URL UWUWUWUWUUWWUUWUWUUW\nend my suffering....\nplease.");

    let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voice.channel.join();

    const dispatcher = connection.play(ytdl(args[0], { filter: 'audioonly' }));

    dispatcher.setVolume(0.5);

    dispatcher.on('finish', ()=>{
        console.log("im donzo");
    });

    message.channel.send(`Hugo is now playing with his nipples AND\nuwuwuwu`);
}

module.exports.help = {
    name: "hugoPlay"
}

