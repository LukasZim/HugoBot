



module.exports.run = async(bot, message) => {
    console.log("halleu");
    respondToHugo(message);
    return;
}
function respondToHugo(message){
    let index = Math.floor(Math.random() * responses.length);
    console.log(index + responses[index]);
    message.channel.send("My infinte knowledge grants you the power of:\n" + responses[index]);
    return;
}

module.exports.help = {
    name: "hugoQuote",
    description: "learn the secrets of hugo's infite knowledge"
}

var quote15 = `Hey riot I have a champion idea, im from brazil, the champion name is ''pedrinho'' the favela boy, when he uses his R he we'll be able to run so fast and steal other champions money pls no copy pastas`;

var quote14 = `Suddenly I woke up and a giant Ant was eating my ***, I was so scared and I cant move. After a while I liked it and went gay. Also reached Plastic V. Now I go to school and try to learn englando. (Never Copy / paste this.)`;

var quote2 = `
⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀ 
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀ ⠀⠀⠀⠀
⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀ ⠀⠀⠀⠀
⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀ ⠀⠀⠀
⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀ ⠀⠀
⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦ ⠀
⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟ ⠀
⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇ ⠀
⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇ ⠀⠀⠀⠀⠀⠀⠀
     ⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇ ⠀⠀⠀⠀⠀⠀⠀⠀
       ⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀ ⠀⠀⠀⠀⠀⠀
     ⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀ ⠀⠀⠀⠀⠀⠀
     ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀ ⠀⠀⠀⠀⠀⠀⠀
      ⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀ 
⠄⠄⠄⠄⠄⠄⣠⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⡄⠄⠄⠄ 
⠄⠄⣀⣤⣴⣾⣿⣷⣭⣭⣭⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⠄ 
⠄⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣸⣿⣿⣧⠄⠄ 
⠄⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⡄⠄ 
⠄⢸⣿⣮⣿⣿⣿⣿⣿⣿⣿⡟⢹⣿⣿⣿⡟⢛⢻⣷⢻⣿⣧⠄ 
⠄⠄⣿⡏⣿⡟⡛⢻⣿⣿⣿⣿⠸⣿⣿⣿⣷⣬⣼⣿⢸⣿⣿⠄ 
⠄⠄⣿⣧⢿⣧⣥⣾⣿⣿⣿⡟⣴⣝⠿⣿⣿⣿⠿⣫⣾⣿⣿⡆ 
⠄⠄⢸⣿⣮⡻⠿⣿⠿⣟⣫⣾⣿⣿⣿⣷⣶⣾⣿⡏⣿⣿⣿⡇ 
⠄⠄⢸⣿⣿⣿⡇⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣿⣿⣿⡇ 
⠄⠄⢸⣿⣿⣿⡇⠄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⠄ 
⠄⠄⣼⣿⣿⣿⢃⣾⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣿⣿⡇⠄ ⠄
`;

var quote = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀       ⢀⣴⡾⠿⠿⠿⠿⢶⣦⣄⠀⠀⠀ ⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀        ⢠⣿⠁⠀⠀⠀⣀⣀⣀⣈⣻⣷⡄⠀ ⠀⠀⠀⠀
   ⠀⠀⠀⠀⠀        ⠀⣾⡇⠀⠀⣾⣟⠛⠋⠉⠉⠙⠛⢷⣄⠀ ⠀⠀⠀⠀⠀⠀
	         ⢀⣤⣴⣶⣿⠀⠀⢸⣿⣿⣧⠀⠀⠀⠀⢀⣀⢹⡆ ⠀⠀⠀⠀⠀⠀
	         ⢸⡏⠀⠀⠀⠀⠀⠀⢿⣿⣿⣷⣶⣶⣿⣿⣿⣿⠃ ⠀⠀⠀⠀⠀⠀
	         ⣼⡇⠀⠀⠀⠀⠀⠀⠈⠻⠿⣿⣿⠿⠿⠛⢻⡇⡇ ⠀⠀⠀⠀⠀
	        ⢀⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇ ⠀⠀⠀⠀
	        ⢀⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⣿⡇ ⠀⠀⠀⠀⠀
	        ⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣈⡇⠀⣿⠀ ⠀⠀⠀⠀
	       ⢰⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⢸⡟⠀ ⠀⠀⠀⠀
	       ⣿⠃⠀⠀⢰⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⠀ ⠀⠀⠀
	      ⣸⡟⠀⣴⠖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠁⠀ ⠀⠀
	     ⢠⣿⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡏⠀⠀ ⠀
	    ⢀⣾⠃⠀⠀⠈⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠁⠀⠀ ⠀
	    ⣸⡟⠀⠀⠀⠀⠪⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀ 
	   ⢰⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡾⠋⠀⠀⠀ 
 	  ⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡟⠀⠀⠀⠀⠀ 
	 ⣿⠁⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡆⠀⣰⡿⠀⠀⠀⠀⠀⠀ 
	 ⣿⡆⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠁⠀⣰⡿⠁⠀⠀⠀⠀⠀⠀ 
	 ⢸⣧⢈⡅⠀⠀⠀⠀⠀⠀⠀⠶⠶⠋⢀⣼⠟⠀⠀⠀⠀⠀⠀⠀⠀ 
	 ⠈⢻⣦⠓⠂⠀⠀⠀⠀⠀⠀⢀⣤⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀
	   ⠙⠿⠶⣶⣤⣤⣶⡶⠿⠛⠉⠀
`;

var quote3 = `My mum (82F) told me (12M) to do the dishes (16) but I (12M) was too busy playing Fortnite (3 kills) so I (12M) grabbed my controller (DualShock 4) and threw it at her (138kph). She fucking died, and I (12M) went to prison (18 years). While in prison I (12M) incited several riots (3) and assumed leadership of a gang responsible for smuggling drugs (cocaine) into the country. I (12M) also ordered the assassination of several celebrities (Michael Jackson, Elvis Presley and Jeffrey Epstein) and planned a terrorist attack (9/11). Reddit, AITA?`;

var quote4 = `	  ⣿⣿⣿⠟⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢋⣩⣉⢻ 
⣿⣿⣿⠀⣿⣶⣕⣈⠹⠿⠿⠿⠿⠟⠛⣛⢋⣰⠣⣿⣿⠀⣿ 
⣿⣿⣿⡀⣿⣿⣿⣧⢻⣿⣶⣷⣿⣿⣿⣿⣿⣿⠿⠶⡝⠀⣿ 
⣿⣿⣿⣷⠘⣿⣿⣿⢏⣿⣿⣋⣀⣈⣻⣿⣿⣷⣤⣤⣿⡐⢿ 
⣿⣿⣿⣿⣆⢩⣝⣫⣾⣿⣿⣿⣿⡟⠿⠿⠦⠀⠸⠿⣻⣿⡄⢻ 
⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⠇⣼ 
⣿⣿⣿⣿⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣰ 
⣿⣿⣿⣿⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣿ 
⣿⣿⣿⣿⣿⠏⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿ 
⣿⣿⣿⣿⠟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿ 
⣿⣿⣿⠋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⣿ 
⣿⣿⠋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸ 
⣿⠏⣼⣿⣿⣿⣿⣿⣿⣿⣿`;

var quote5 = `This game is so buggy that even the character creator is broken

I heard that the game had some bugs but I wasn’t expecting them to hurt my experience so quickly. I was making my character and I got to the genitals option and gave my character a penis. I scrolled through the size option and noticed a game breaking bug. The labels are wrong for the penises. I gave my character what was labeled as “small penis” and was surprised to find that it was way bigger than my real penis. This is a serious game breaking bug and CD Project Red needs to make fixing this issue it’s number one priority.`;


var quote6 = `Hello am 48 year man from somalia. Sorry for my bed england. I selled my wife for internet connection for play "conter strik" and i want to become the goodest player like you I play with 400 ping on brazil and i am global elite 2. pls no copy pasterio my story`;

var quote7 = `What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.`;

var quote8 = `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.

It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life…

He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did.

Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.`;

var quote12 = `The thing I really like about Planes is that we learn that WWII happened in the Cars universe. Which means there was a Cars Hitler, a Cars holocaust, a Cars Pacific War, a Cars D-Day, a Cars nuking of Hiroshima and Nagasaki, a Cars Rape of Nanking, a Cars Battle of Iwo Jima...

This leads to so many important questions, like: were the Cars Little Boy and Fat Man nukes sentient? Was it a suicide mission? Are ALL Cars nuclear weapons sentient? Did Tsar Bomba have a personality? What kind of car was Car Hitler? A VW? A forklift?

Was there a Cars 9/11? Were the planes hijacked, or were the planes themselves radicalized? I could go on`;


var quote9 = `Hello. I am a 15 year old Rhinoceros. The only problem is that my horn on my head is soft and limp. As you may know this is very devastating to a rhino like myself. If there are any rhinos out there that can help me with my problem it would be appreciated. Please dont copy paste this. This is my story.`;


var quote10 = `heyyy queen I saw your tweet about how men are trash and I just wanted to let you know that I agree. although I myself am a man, (i know, ugh) i am on your side. “one of the good ones” as some may say. btw I never even noticed how fat your boobies are till now but they’re awesome`;

var quote11 = `Sorry to bother you milady, but id like to inform you that i just ejaculated to your reddit avatar. I dont know why, its just so hot. omg the pink skin makes it even better`;


var quote13 = `ello my name is miguel and i am portugal a beautifulest country in Euro and I would just like say that I am inspire by you stream. I quit my job at the toothbrush factory and finally I am move from Bronze V to Bronze 3. I live with my mother and is the muchest good decision on my life. Please dont copy paste this message or you really are a sad`;


var quote16 = `hai guys, im a 11 year old girl lives in bangeldesh my only dream is to visit summoners rift my jewish parents wont let me listen to darude sandstorm. please no copper pasta`

var quote17 = `	  ⠄⠄⠄⠄⠄⢀⠁⣼⣿⢿⢰⡹⣿⣷⣹⡿⠶⠯⡃⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄ 
⠄⠄⠄⠄⠄⢘⡤⠁⣿⡎⠘⠁⢩⡻⠷⣝⣴⣾⢦⡿⠳⢠⠂⠄⠄⠄⠄⠄⠄⠄ 
⠄⢀⣠⠤⠄⠄⠄⠰⡙⠻⡼⣾⣿⣿⣿⣔⣸⣯⢨⡎⢀⢣⡣⡀⠄⡀⠄⠄⠄⠄ 
⠄⣿⠄⠄⠄⠄⠄⡄⢸⢀⡐⣸⢿⣿⣽⣿⢿⠃⣿⠄⠄⢦⠻⣎⢦⣈⠢⡀⠄⠄ 
⠄⢻⡀⠄⠄⡀⣸⡉⡞⣈⠄⣿⠁⣰⣯⣵⣿⡄⢏⠄⠁⡌⢧⡪⢻⣮⠳⣮⡀⠄ 
⠄⠄⠈⠉⣩⣾⢣⢇⣥⣶⢆⡿⣰⣿⣿⣿⣿⡇⣰⣮⡻⣶⣶⣅⢣⢣⢣⠈⢳⡀ 
⠄⠄⣠⢞⡵⡋⣦⣿⢟⡵⣫⣾⣿⣿⣿⣿⣿⣧⢷⡘⡻⢮⡻⣿⡇⢾⠸⠄⠄⡇ 
⢀⡾⣱⢋⣼⢻⢸⣏⢯⣼⣿⣿⣿⣯⡻⣿⣿⢛⣌⢿⣮⣛⡚⠸⣇⠘⢘⣤⠞⠃ 
⡾⠁⣇⢸⣿⡄⡇⢋⣾⣜⣿⣿⣿⣿⣷⣹⢱⣿⣿⣿⣾⣿⣿⣦⢸⢠⣿⠁⠄⠄ 
⡇⠄⠹⡌⡸⢃⢋⣾⣿⣿⣿⣿⣿⣿⣿⡏⣿⣿⣿⣿⣿⡿⠿⢿⣧⠻⠣⣑⢦⡀ 
⣧⠄⠄⠈⢽⡆⢸⢱⡟⢱⡜⣿⣿⣿⣿⢃⣿⣿⣿⣿⡏⣾⢙⡇⣿⢀⠱⢻⡆⢹ 
⠙⢷⣤⣬⠎⢱⢌⢷⣽⣭⣾⣿⣿⣿⢏⣾⡜⣿⣿⣿⣿⣮⣭⣼⠟⡸⡄⣸⠃⡸ 
⠄⣾⡶⢰⡸⡈⡾⣠⣍⢛⠛⣛⣫⣵⡿⠿⢿⣮⣙⣛⣛⡛⣛⢩⡆⡿⠄
`

var quote18 = `Simon: Hello and welcome back this is the topical discussion on the morning breeze on nbs television, my name is Simon Kangualiala. We bring in the studio this morning one of the gae rights activists: mr. - should i call you Mr??- Pepe Julien Onzima, thank you for coming in, good morning WHY ARE YOU GAEH?

Pepe: Who says I'm geh?

Simon: YOU are gae.`

var quote19 = `
Hey👋 ladies💁‍♀️ 📷 Would 😍 you 👈 like 👍 to 2️⃣ get 😮 rich 💰💰💰 by running 🏃‍♀️🏃‍♀️ your 👈 own business 👩‍💼💼 from home 🏡 with just ☝ your phone? 📱🤳 Well 🤷‍♀️ you can't. 😂 Get 👏 a 👏 real 👏 job 👏 you 👏 stupid 👏 cunt`;


const responses = [quote,
    quote2,
    quote3,
    quote4, 
    quote5,
    quote6,
    quote7,
    quote8,
    quote9,
    quote10,
    quote11,
    quote12,
    quote13,
    quote14,
    quote15,
    quote16,
    quote17,
    quote18,
    quote19
]