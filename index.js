const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");

const active = new Map();

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("welke files denk jij hier te vinden?");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        bot.commands.set(fileGet.help.name, fileGet);
    });
});





bot.once("ready", () => {
    console.log("Im ready to ruuuuumbleeeeeeeeeeeee");
});

bot.once("reconnecting", () => {
    console.log("Im reconnecting, valve pls fix");
});

bot.once("disconnect", () => {
    console.log("Aaaaaaaaaaaand im gone...");
})




bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("with Hugo's Nipples", { type: "PLAYING" });
});

const responses =   ["goedenmorgen alterego, ZIJN.WE.ER.KLAAR.VOOR>?\nAJAJ KAPITIJN",
                    "WAAJOOO, ZIE IK GEWOON MEZEEEEEELUUUUF \n AHAHHAHAHAH XD LUMFAO XDXDDXXDXDXD",
                    "LOLOLOLOLOLOL, MAG IK JE RUGINSMEREN MET BABYOLIE\n makker.",
                    "YO, WANNEER GAAN WE WEER EENS SAMEN KINDERKLAPPEN?\n Je weet wel zoals in de goede oude tijd",
                    "OWHOWHOWHOAH, WIL JE EEN MASSAGE MET HAPPIE END?!?!!?, \n dan helpen we elkaar ( ͡° ͜ʖ ͡°)",
                    "JOUW OGEN ZIJN BLAUWER DAN DE ATLANTICSCHCCSE OCEAAN, \n EN IK VIND T NIE ERG OM VERLOREN TE ZIJN OP ZEE!!!!",
                    "DAAAAAAAAAAAAAAAAAAAAAR MOET EEN PIEMEL IIIIIIIIIIIIIIIIIIIIIN",
                    "Ja ik ben ook bijna 12 net als jij! \n leeeeeeuuuuuuuuuuk heeeeeeeeeeeee!?!?!",
                    "KEEEEEEEEEREEEEEEEEEL ik proef kurk",
                    "Are your parents bakers? Because you're a cutie pie!",
                    "If I could rearrange the alphabet, I'd put I and U together!!!!!",
                    "DUHHH CIRNGE!!!! DUHHH BRINGE!!???!!1 CRINGE!!!!! IS THAT ALL YOU SHITPOSTING FUCKS CAN SAY!!??? DURR BASED BASED BASED CRINGE CRINGE BASED BASED CRINGE CRINGE CRINGE BASED CRINGE I FEEL LIKE IM IN A FUCKING ASYLUM FULL OF DEMENTIA RIDDEN OLD PEOPLE THAT CAN DO NOTHING BUT REPEAT THE SAME FUCKING WORDS ON LOOP LIKE A FUCKING BROKEN RECORD CRINGE CRINGE CRINGE BASED BASED CRINGE ONIONS ONIONS ONIONS SNOYY ONIONS LOL ONIONS!!! CRINGE!!!1 BOOMER!! LE ZOOMER!!!! I AM BOOMER!!!! NO ZOOM ZOOM ZOOMIES ZOOMER GOING ZOOMIES AHGHGH I FUCKING HATE THE INTERNET SO GODDAMN MUCH FUCKJK YOU SHITPOST I HONEST TO GOD HOPE YOUR MOTHER CHOKES ON HER OWN FECES IN HELL YOU COCKSUCKER VUT OHHH I KNOWM MY POST IS CRINGE ISNT IT?? CRINGE CRINGE CRINGR CRINGEY BASED CRINGE BASED REDDIT REDDIT CRINGE ZOOM CRINGE ONIONS REDDIT BASED BASED!!!!!!",
                    "Oh I'm sorry. I just looked at your profile I didn't realize you where a lady. (And a beautiful one at that) I try my best to respect women. Especially women in gaming. As a matter of fact now I actually do agree with you. I'm sorry. Maybe you could even add me on PSN and we can play some games together. We could play GTA, overwatch, Minecraft, maybe even a little COD. add me xXxChildMolesterxXx. Sorry about my name. My cousin made it a while back. He is not a good person like me and does not carry my values.",
                    "wat ben ik toch smikkeltastisch!"
                    ]


bot.on("message", async message => {
    if (message.author.bot && message.author.id != 699408178605064292) {
        message.channel.send("houd je kk bek tering bot, hopelijk sterf je aan parkinsons")
        return;
    }
    if (message.author.id == 321034764268077066) {
        let rand = Math.floor(Math.random() * 5)    // 20 % chance to respond to our boi
        if(rand == 0){
            // do respond to hugo
            respondToHugo(message);
        }
    }
    if (channelIdChecker(message.channel.id)) {


        return;
    } //disabled in general
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    //console.log(message.content);
    var arguments = messageArray.slice(1);
    var commands = bot.commands.get(command);

    var options = {
        active: active
    }


    if (commands) {
        commands.run(bot, message, arguments, options);
    } else {
        //als de message "hugo" bevat, stuur iets irritants
        if (message.content.toLowerCase().includes("hugo"))
            return message.channel.send("LOOOOOOOOOL, DAT BEN IK \nIK.BEN.LETTERLIJK.HUGO.WTF.LOOOOOOL.XDXD.LMAO!!!!");
        if (message.content.toLowerCase().includes("gay")) {
            return message.channel.send("( ͡° ͜ʖ ͡°)");
        }
    }
});

function respondToHugo(message){
    let index = Math.floor(Math.random() * responses.length);
    message.channel.send("<@321034764268077066>" + responses[index]);
}

function channelIdChecker(id) {
    if (id == 454340635374387234) return true;
    if (id == 476181464057118742) return true;
    if (id == 695744351833423903) return true;
    if (id == 601414098214846465) return true;
    
    return false;
}

bot.login(process.env.token);

