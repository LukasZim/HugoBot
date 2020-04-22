const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    
    console.log(`${message.member.nickname} changed their nickname`);
    return message.member.setNickname(args[1]);
}

module.exports.help = {
    name: "changeNick"
}