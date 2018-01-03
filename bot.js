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
	if (message.author.bot) return;
	if (swearWords.some(word => message.content.includes(word)) ) {
		bot.users.get('309800585438298122').send(message.content)
	}
	
});

process.on('unhandledRejection', error => {
  console.error(`Uncaught Promise Error: \n${error.stack}`);
});

bot.login(process.env.BOT_TOKEN);
