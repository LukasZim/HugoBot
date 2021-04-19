const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let arr = Array.from(bot.commands.values());
    console.log(bot.commands.values());
    let str = "";
    let fields = []

    const embed = new discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("All commands I can pull from my Nipples!!")
        .setURL("https://pornhub.com/gayporn")
        .setAuthor("Hugo de Heer bot", "https://www.facebook.com/hugo.deheer.7")
        .addThumbnail('https://pbs.twimg.com/profile_images/464788131967807488/1tEzXaF8.jpeg')
        
    for (let i = 0; i < arr.length; i++) {
        embed.addField({name: arr[i].help.name, value: arr[i].help.description})
        str += arr[i].help.name + ": " + arr[i].help.description + "\n";
    }
    message.channel.send(embed)
}

module.exports.help = {
    name: "hugoHelp",
    description: "shows you all possible commands"
}