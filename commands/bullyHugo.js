
module.exports.run = async (bot, message, args) => {
    var target = bot.guilds.cache.array()[0].members.cache.array().find(function (element) {
        return element.id == 321034764268077066;
    });
    // var newNick = (args.join(" ") == "") ? "kinderklapper" : args.join(" ");
    target.setNickname(args.join(" "));
    return message.channel.send("Hugo's new nickname is: " + message.content.replace("bullyHugo ", ''));
}

module.exports.help = {
    name: "bullyHugo",
    description: "change hugo's nickname to whatever you want it to be"
}

