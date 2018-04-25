const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('ready', async () => {
	console.log('Bot Starting!!')
});

bot.on('message', message => {
	console.log(`${message.content}`)
});

bot.on('message', message => {
	const swearWords = ["keciduk"]
	if (message.author.id === '395817062519406592') return;
	//if (message.author.id === '287824903002914816') return;
	if (swearWords.some(word => message.content.includes(word)) ) {
		let embed = new Discord.RichEmbed()
			.setTitle('Ingfo Razia TerApdate BossQu')
			.setColor(0x00AE86)
			.addField('Pelapor', "```css\n"+`${message.author.username}`+"```", true)
			.addField('Lokasi', "Information :"+'\n'+`${message.content}`, true)
			.setTimestamp()
			.setThumbnail(message.author.avatarURL);
			bot.users.get('309800585438298122').send(embed)
		
	}
	
});

bot.on('message', message => {
	const swearWords1 = ["Disconnected"]
	if (message.author.id === '395817062519406592') return;
	if (swearWords1.some(word => message.content.includes(word)) ) {
		const id = "437638134142992384";
		const channel = bot.channels.get(id);
		channel.send(message.content)
		
	}
	
});

bot.on('message', message => {
	const swearWords2 = ["inventory", "sold:"]
	if (message.author.id === '395817062519406592') return;
	if (swearWords2.some(word => message.content.includes(word)) ) {
		const id = "432182132660502553";
		const channel = bot.channels.get(id);
		channel.send(message.content)
		
	}
	
});

bot.on('message', message => {
	const swearWords3 = ["From:","warning"]
	if (message.author.id === '395817062519406592') return;
	if (swearWords3.some(word => message.content.includes(word)) ) {
		const id = "432182622639095809";
		const id2 = "309800585438298122"
		const channel = bot.channels.get(id);
		channel.send(message.content)
		
		
	}
	
});

//bot.on('message', message => {
//	const swearWords4 = ["udahan"]
//	if (message.author.id === '395817062519406592') return;
//	if (swearWords4.some(word => message.content.includes(word)) ) {
//		bot.users.get('324777613723697152').send(message.content)
		
//	}
	
//});


process.on('unhandledRejection', error => {
  console.error(`Uncaught Promise Error: \n${error.stack}`);
});

bot.login(process.env.BOT_TOKEN);
