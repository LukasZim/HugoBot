
module.exports.run = async(bot, message) => {
    // var target = bot.guilds.cache.array()[0].members.cache.array().find(function(element){
    //     return element.id == 321034764268077066;
    // });
    // console.log(bot.guilds.cache);
    // console.log("target " + target);
    // console.log("1 " + await hug(321034764268077066));
    // console.log("2 " +await message.guild.members.fetch(321034764268077066));
    // console.log("wut");
    // console.log("3 " + message.guild.members.cache.get("321034764268077066"));
    // console.log(message.guild.members.cache.get("321034764268077066"));
    // console.log(discord.users.get("321034764268077066"));
    message.guild.members.fetch("321034764268077066").then(hugo => {
        var newNick = shuffle(hugo.nickname);
        hugo.setNickname(newNick);
        return message.channel.send("Mijn username is nu: " + newNick);
    });
    // const hugo = await hug("321034764268077066");
    // console.log(hugo);
    return;
}

module.exports.help = {
    name: "hugoRandom",
    description: "randomizes hugo's name, by shuffling all characters in a random order"
}

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }

function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    var n = arr.length;              // Length of the array

    for(var i=0 ; i<n-1 ; ++i) {
        var j = getRandomInt(n);       // Get random of [0, n-1]
        
        var temp = arr[i];             // Swap arr[i] and arr[j]
        arr[i] = arr[j];
        arr[j] = temp;
    }

    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
}  