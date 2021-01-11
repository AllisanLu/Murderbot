const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Ready!');
});
// ^^ if "Ready!" the bot is rdy to be used C:
client.login('token');
