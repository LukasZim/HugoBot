const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    console.log("halleu");
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('./hugoSmoel.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    ctx.font = applyText(canvas,args.join(" "));
	ctx.fillStyle = '#ff0066';
	ctx.fillText(args.join(' '), canvas.width / 1, canvas.height / 1);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'hugoSmoel.png')
    message.channel.send(`Im proud you are this retarded!\nHowever you are no match for me:`, attachment);
}

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

module.exports.help = {
    name: "hugoFace",
    description: "but text on hugo's face like this: hugoFace <text>"
}