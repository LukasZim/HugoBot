/* eslint-disable no-irregular-whitespace */




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

var quote20 = `So today, for the first time, my little toddler finally counted to ten. Everyone was celebrating, saying how proud they are in my kid, and then Ben Shapiro kicks open the door. "Oh you think it's impressive that they can count to ten? I can count to one million." and then proceeded, in my living room for the next two weeks, to count to one million. He then said "yep, another libtard destroyed" and then curbstomped my kid.`

var quote21 = `My Grandfather smoked his whole life. I was about 10 years old when my mother said to him, 'If you ever want to see your grandchildren graduate, you have to stop immediately.'. Tears welled up in his eyes when he realized what exactly was at stake. He gave it up immediately. Three years later he died of lung cancer. It was really sad and destroyed me. My mother said to me- 'Don't ever smoke. Please don't put your family through what your Grandfather put us through." I agreed. At 28, I have never touched a cigarette. I must say, I feel a very slight sense of regret for never having done it, because your message gave me cancer anyway.`

var quote22 = `
I was only nine years old. I loved Shrek so much, I had all the merchandise and movies. I'd pray to Shrek every night before I go to bed, thanking for the life I've been given. "Shrek is love", I would say, "Shrek is life". My dad hears me and calls me a faggot. I knew he was just jealous for my devotion of Shrek. I called him a cunt. He slaps me and sends me to go to sleep. I'm crying now and my face hurts. I lay in bed and it's really cold. A warmth is moving towards me. I feel something touch me. It's Shrek. I'm so happy. He whispers in my ear, "This is my swamp". He grabs me with his powerful ogre hands, and puts me on my hands and knees. I spread my ass-cheeks for Shrek. He penetrates my butthole. It hurts so much, but I do it for Shrek. I can feel my butt tearing as my eyes start to water. I push against his force. I want to please Shrek. He roars a mighty roar, as he fills my butt with his love. My dad walks in. Shrek looks him straight in the eye, and says, "It's all ogre now". Shrek leaves through my window. Shrek is love. Shrek is life.﻿`

var quote23 = `░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░
░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░
░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░
░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░
░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░
░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░
░░░░░░░░░░░░░▐░░░░▐███████████▄░░░
░░░░░le░░░░░░░▐░░░░▐█████████████▄
░░░░toucan░░░░░░▀▄░░░▐█████████████▄ 
░░░░░░has░░░░░░░░▀▄▄███████████████ 
░░░░░arrived░░░░░░░░░░░░█▀██████░░`

var quote24 = `⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿`


var quote25 = `
I sexually Identify as an Attack Helicopter. Ever since I was a boy I dreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and I'm *** retarded but I don't care, I'm beautiful. I'm having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me "Apache" and respect my right to kill from above and kill needlessly. If you can't accept me you're a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.`

var quote26 = `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⢿⣿⣿⠿⠛⠿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠉⠄⣀⡤⢤⣤⣈⠁⣠⡔⠶⣾⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠁⠄⠄⠄⣼⣿⠁⡀⢹⣿⣷⢹⡇⠄⠎⣿⣿⣿
⣿⣿⣿⠿⠛⠉⠁⠄⠄⠄⠄⠄⠄⠄⠹⣇⣀⣡⣾⣿⡿⠉⠛⠒⠒⠋⠉⢸
⡿⠋⠁⠄⠄⢀⣤⣤⡀⠄⠄⠄⠄⠄⠄⠈⠙⠛⠛⠉⠄⠄⠄⠄⠄⠄⠄⠈
⠄⠄⠄⠄⠄⢹⣧⡈⠿⣷⣄⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⢄⣾
⠄⠄⠄⠄⠄⠈⠻⢿⣶⣌⣙⡛⠛⠿⠶⠶⠶⠶⠶⠖⣒⣒⣚⣋⡩⢱⣾⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠛⠛⠛⠻⠿⠿⠟⠛⠛⠛⠉⢉⣥⣶⣾⣿⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠒⠶⣿⣿⣿⣿⣿⣿⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿
⣿⡿⠛⠛⠛⢻⣿⠿⠛⠛⠛⢿⣿⣿⡿⠛⠛⠛⢻⡟⠛⣿⡿⠛⣻⣿⣿⣿
⡟⠄⣼⣿⣿⣿⡇⠄⣾⣿⣧⠄⢻⡏⠄⣼⣿⣿⣿⡇⠄⡟⢀⣴⣿⣿⣿⣿
⡇⠄⣿⣿⣿⣿⡄⠄⣿⣿⣿⠄⢸⡇⠄⣿⣿⣿⣿⡇⠄⣀⠈⢻⣿⣿⣿⣿
⣿⣄⠈⠙⠛⢻⣧⡄⠙⠛⠉⣠⣿⣷⣄⠈⠙⠛⢹⡇⠄⣿⣧⠄⠻⣿⣿⣿`

var quote27 = `⢰⣶⠶⢶⣶⣶⡶⢶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⡶⠶⢶⣶⣶⣶⣶
⠘⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⠿⠄⠄⠄⠈⠉⠄⠄⣹⣶⣿⣿⣿⣿⢿
⠄⠤⣾⣿⣿⣿⣿⣷⣤⡈⠙⠛⣿⣿⣿⣧⣀⠠⣤⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣶
⢠⠄⠄⣀⣀⣀⣭⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣤⣿⣿⠉⠉⠉⢉⣉⡉⠉⠉⠙⠛⠛
⢸⣿⡀⠄⠈⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⢿⣿⣿⣷⣾⣿
⢸⣿⣿⣿⣿⣿⣿⣿⣿⠛⢩⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢸⣿⣿⣿⣿⣿⡿⣿⣿⣴⣿⣿⣿⣿⣄⣠⣴⣿⣷⣭⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠸⠿⣿⣿⣿⠋⣴⡟⠋⠈⠻⠿⠿⠛⠛⠛⠛⠛⠃⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢸⣿⣿⣿⡁⠈⠉⠄⠄⠄⠄⠄⣤⡄⠄⠄⠄⠄⠄⠈⠄⠈⠻⠿⠛⢿⣿⣿⣿⣿⣿
⢸⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⣠⣄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣿⣿⣿⣿
⢸⣿⣿⣿⡀⠄⠄⠄⠄⠄⠄⠄⠉⠉⠁⠄⠄⠄⠄⠐⠒⠒⠄⠄⠄⠄⠉⢸⣿⣿⣿
⢸⣿⣿⣿⢿⣦⣄⣠⣄⠛⠟⠃⣀⣀⡀⠄⠄⣀⣀⣀⣀⣀⣀⡀⢀⣰⣦⣼⣿⣿⡿
⢸⣿⣿⣿⣿⣿⣿⣻⣿⠄⢰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢛⣥⣾⣟⣿⣿⣿⣿⣿
⢸⣿⣿⣿⣿⣿⣿⣿⣿⡆⠈⠿⠿⠿⠿⠿⠿⠿⠿⠿⣧⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`

var quote28 = `To be fair, you have to have a very high IQ to understand Rick and Morty. The humor is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer's head. There's also Rick's nihilistic outlook, which is deftly woven into his characterisation - his personal philosophy draws heavily from Narodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they're not just funny- they say something deep about LIFE. As a consequence people who dislike Rick and Morty truly ARE idiots- of course they wouldn't appreciate, for instance, the humour in Rick's existencial catchphrase "Wubba Lubba Dub Dub," which itself is a cryptic reference to Turgenev's Russian epic Fathers and Sons. I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Dan Harmon's genius unfolds itself on their television screens. What fools... how I pity them. 😂 And yes by the way, I DO have a Rick and Morty tattoo. And no, you cannot see it. It's for the ladies' eyes only- And even they have to demonstrate that they're within 5 IQ points of my own (preferably lower) beforehand.`

var quote29 = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣠⣤⣤⣄⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠖⠊⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠲⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡤⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢢⠀⠀⠀⠀⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⠀⠀⠀⠀⡀⠈⠀⡀⠀⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠘⡆⡜⠁⠀⠀⠀⠀⢧⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠸⡀⠀⠀⠀⠀⠀⣀⣤⡂⠀⠇⠱⠀⡀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⠈⢄⡀⢠⣟⢭⣥⣤⠽⡆⠀⡶⣊⣉⣲⣤⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⡀⠀⠐⠂⠘⠄⣈⣙⡡⡴⠀⠀⠙⣄⠙⣛⠜⠘⣆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⢦⡀⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠄⠊⠀⠀⠀⠀⡸⠛⠀⠀⠀⢸⠆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠦⢄⣘⣄⠀⠀⠀⠀⠀⠀⠀⡠⠀⠀⠀⠀⣇⡀⠀⠀⣠⠎⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠈⡟⠒⠲⣄⠀⠀⡰⠇⠖⢄⠀⠀⡹⡇⢀⠎⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⡇⠀⠀⠹⠀⡞⠀⠀⢀⠤⣍⠭⡀⢱⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣀⣀⣠⠞⠀⠀⢠⡇⠀⠀⠀⠀⠁⠀⢴⠥⠤⠦⠦⡼⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣀⣤⣴⣶⣿⣿⡟⠁⠀⠋⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠀⠑⣠⢤⠐⠁⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠬⠥⣄⠀⠀⠈⠲⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⠀⠀⢀⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠒⠦⠤⢤⣄⣀⣠⠤⢿⣶⣶⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠁⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣤⣤⣀⣀⣀⣀⣀⣀⣀⣤⣤⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀`

var quote30 = `⣿⣷⡶⠚⠉⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠠⣴⣿⣿⣿⣿⣶⣤⣤⣤
⠿⠥⢶⡏⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⣴⣷⣌⢿⣿⣿⣿⣿⣿⣿⣿
⣍⡛⢷⣠⣿⣿⣿⣿⣿⣟⠻⣯⠽⣿⣿⠟⠁⣠⠿⠿⣿⣿⣎⠻⣿⣿⣿⡿⠟⣿
⣿⣿⣦⠙⣿⣿⣿⣿⣿⣿⣷⣏⡧⠙⠁⣀⢾⣧    ⠈⣿⡟  ⠙⣫⣵⣶⠇⣋
⣿⣿⣿⢀⣿⣿⣿⣿⣿⣿⣿⠟⠃⢀⣀⢻⣎⢻⣷⣤⣴⠟  ⣠⣾⣿⢟⣵⡆⢿
⣿⣯⣄⢘⢻⣿⣿⣿⣿⡟⠁⢀⣤⡙⢿⣴⣿⣷⡉⠉⢀  ⣴⣿⡿⣡⣿⣿⡿⢆
⠿⣿⣧⣤⡘⢿⣿⣿⠏  ⡔⠉⠉⢻⣦⠻⣿⣿⣶⣾⡟⣼⣿⣿⣱⣿⡿⢫⣾⣿
⣷⣮⣝⣛⣃⡉⣿⡏  ⣾⣧⡀    ⣿⡇⢘⣿⠋    ⠻⣿⣿⣿⢟⣵⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣌⢧⣴⣘⢿⣿⣶⣾⡿⠁⢠⠿⠁⠜    ⣿⣿⣿⣿⡿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣦⡙⣿⣷⣉⡛⠋    ⣰⣾⣦⣤⣤⣤⣿⢿⠟⢋⣴⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣌⢿⣿⣿⣿⣿⢰⡿⣻⣿⣿⣿⣿⣿⢃⣰⣫⣾⣿⣿⣿
⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠿⠿⠿⠛⢰⣾⡿⢟⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`

var quote31 = `You fucked up kid. As I type this I have my modded PS2 running a track IP script on your post. Once I have triangulated your position in the world, my PS3 will release to your router my very own Pandora box virus. You won't notice it at first, but soon your lame PC will begin to work against you in ways you can't even imagine. First your graphics card will start to emit the flu virus, your ram will be uploaded online so everyone will be able to use it, your motherboard will slowly secrete acidic resin which will fry the electronics. The processor will be fine, just to give you hope.
You will be left with a husk of a machine, all because you decided to critique my mental ability... was it worth it?
Not even your mummy can help you now fuck boy`

var quote32 = `I saw Hikaru Nakamura at a grocery store in Los Angeles yesterday. I told him how cool it was to meet him in person, but I didn’t want to be a douche and bother him and ask him for photos or anything.
He said, “Oh, like you’re doing now?”
I was taken aback, and all I could say was “Huh?” but he kept cutting me off and going “huh? huh? huh?” and closing his hand shut in front of my face. I walked away and continued with my shopping, and I heard him chuckle as I walked off. When I came to pay for my stuff up front I saw him trying to walk out the doors with like fifteen Milky Ways in his hands without paying.
The girl at the counter was very nice about it and professional, and was like “Sir, you need to pay for those first.” At first he kept pretending to be tired and not hear her, but eventually turned back around and brought them to the counter.
When she took one of the bars and started scanning it multiple times, he stopped her and told her to scan them each individually “to prevent any electrical infetterence,” and then turned around and winked at me. I don’t even think that’s a word. After she scanned each bar and put them in a bag and started to say the price, he kept interrupting her by yawning really loudly.

 

I'm still in shock! Anyone else had similar experiences?`

var quote33 = `My friend really wants to know where he can find a soft mommy dom gf milf porn video and he's been nagging me all day haha, does anyone know a porn video like this? Can you please post it down below? He really needs it, preferably with some role-playing, and he says he doesn't mind if there's feet involved. Thanks.`


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
    quote19,
    quote20,
    quote21,
    quote22,
    quote23,
    quote24,
    quote25,
    quote26,
    quote27,
    quote28,
    quote29,
    quote30,
    quote31,
    quote32,
    quote33
]