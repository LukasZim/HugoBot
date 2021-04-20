const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    console.log("halleu");
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('./hans.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'hugoSmoel.png')
    message.channel.send(`Im proud you are this retarded!\nHowever you are no match for me:`, attachment);
}

module.exports.help = {
    name: "hugoFace",
    description: "but text on hugo's face like this: hugoFace <text>"
}