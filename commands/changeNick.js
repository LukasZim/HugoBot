const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    
    console.log(`${message.member.nickname} changed their nickname`);
    var newNick = args.join(" ");
    return message.member.setNickname(newNick);
}

module.exports.help = {
    name: "changeNick",
    description: "lets you change your nickname"
}