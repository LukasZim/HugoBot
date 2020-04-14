const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();

const targetid = "699434206308204604"
var target = null;

function channelIdChecker(id){
    if(id == 454340635374387234) return true; 
    if(id == 476181464057118742) return true;
    if(id == 695744351833423903) return true;
    if(id == 601414098214846465) return true;

    return false;
}


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Hugo's Asshole", { type: "WATCHING" });
    //console.log("all guilds below!!");
    //console.log(bot.guilds.cache.first().members.cache.get(targetid).setNickname("nicht"));
    //console.log(bot.users.fetch(targetid));

    // setInterval(async () => {
    //     target = bot.guilds.cache.array()[0].members.cache.array().find(function(element){
    //         return element.id == 321034764268077066;
    //     });
    //     var begin = target.nickname.slice(0, 1);
    //     var end = target.nickname.slice(1);
    //     target.setNickname(end + begin);
    //     console.log(target.nickname);
    // }, 1000 * 60* 30);

    //target = bot.users.fetch(targetid);
});




//stuur iets irritants als een message hugo bevat
bot.on("message", async message => {
    //negeer de bot zegmaar
    if(message.author.bot) return;
    if(channelIdChecker(message.channel.id)) return; //disabled in general
    
    //log alles op een fancy manier
    console.log( message.author.username + ": " + message.content);

    //als de message "hugo" bevat, stuur iets irritants
    if(message.content.toLowerCase().includes("hugo"))
        return message.channel.send("LOOOOOOOOOL, DAT BEN IK \nIK.BEN.LETTERLIJK.HUGO.WTF.LOOOOOOL.XDXD.LMAO!!!!");

    if (message.content.includes('changeNick')) {

        console.log("test?");
        //console.log(message.member);
        message.member.setNickname(message.content.replace("changeNick ", ''));
    }

    if(message.content.toLowerCase().includes("gay")){
        message.channel.send("( ͡° ͜ʖ ͡°)");
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