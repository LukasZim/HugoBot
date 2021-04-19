const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let arr = Array.from(bot.commands.values());
    console.log(bot.commands.values());
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i].help.name + ": " + arr[i].help.description + "\n";
    }
    message.channel.send(str)
}

module.exports.help = {
    name: "hugoHelp",
    description: "shows you all possible commands"
}