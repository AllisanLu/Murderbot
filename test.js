// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!blub') {
		message.channel.send('blub');
	}
	else if (message.content == '!killLekan') {
		message.channel.send("Fk u", {files: ["KillLekan.gif"]});
	}
});



// login to Discord with your app's token
client.login('token here');
