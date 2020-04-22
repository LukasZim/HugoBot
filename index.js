const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands", (err, files) => {
    
    if(err) console.log(err);
    
    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <= 0){
        console.log("welke files denk jij hier te vinden?");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);
    });
});



const targetid = "699434206308204604"
var target = null;

function channelIdChecker(id){
    if(id == 454340635374387234) return true; 
    if(id == 476181464057118742) return true;
    if(id == 695744351833423903) return true;
    if(id == 601414098214846465) return true;

    return false;
}

bot.once("ready", () => {
    console.log("Im ready to ruuuuumbleeeeeeeeeeeee");
});

bot.once("reconnecting", ()=> {
    console.log("Im reconnecting, valve pls fix");
});

bot.once("disconnect", ()=>{
    console.log("Aaaaaaaaaaaand im gone...");
})

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


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("with Hugo's Nipples", { type: "PLAYING" });
});


bot.on("message", async message => {
    if(message.author.bot) return;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    console.log(message.content);
    var arguments = messageArray.slice(1);
    var commands = bot.commands.get(command);
    if(commands) commands.run(bot, message, arguments);
});

//stuur iets irritants als een message hugo bevat
bot.on("message", async message => {
    //negeer de bot zegmaar
    if(message.author.bot) return;
    if(channelIdChecker(message.channel.id)) return; //disabled in general
    
    //log alles op een fancy manier
    console.log( message.author.username + ": " + message.content);

    //bully hugo
    if(message.content.includes("bullyHugo")){
        // target = bot.guilds.cache.array()[0].members.cache.array().find(function(element){
        //             return element.id == 321034764268077066;
        // });
        // target.setNickname(message.content.replace("bullyHugo ", ''));
        // return message.channel.send("Hugo's new nickname is: " + message.content.replace("bullyHugo ", ''));
    }

    //randomize hugo's naam
    if(message.content.includes("randomHugo")){
        // target = bot.guilds.cache.array()[0].members.cache.array().find(function(element){
        //     return element.id == 321034764268077066;
        // });
        // var newNick = shuffle(target.nickname);
        // target.setNickname(newNick);
        // return message.channel.send("Mijn username is nu: " + newNick);
    }


    //als de message "hugo" bevat, stuur iets irritants
    if(message.content.toLowerCase().includes("hugo"))
        return message.channel.send("LOOOOOOOOOL, DAT BEN IK \nIK.BEN.LETTERLIJK.HUGO.WTF.LOOOOOOL.XDXD.LMAO!!!!");

    if (message.content.includes('changeNick')) {

        console.log("test?");
        //console.log(message.member);
        return message.member.setNickname(message.content.replace("changeNick ", ''));
    }

    if(message.content.toLowerCase().includes("gay")){
        return message.channel.send("( ͡° ͜ʖ ͡°)");
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(channelIdChecker(message.channel.id)) return; //disabled in general

    if(message.author.id == 321034764268077066){
        message.channel.send("goedenmorgen alterego, ZIJN.WE.ER.KLAAR.VOOR>?\nAJAJ KAPITIJN");
        //bot.user.setUsername(message.member.nickname);
    }
});



bot.login(process.env.token);