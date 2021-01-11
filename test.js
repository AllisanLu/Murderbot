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
	console.log(message.content);
});

if (message.content === '!blub') {
	message.channel.send('blub');
}

// login to Discord with your app's token
client.login('Nzk1NjkzMjc5NjA5MzU2MzE5.X_NFHQ.tl0hnEPF5Umy8adqRafp8sexU_4');
