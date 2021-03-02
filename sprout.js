const Discord = require('discord.js');
const client = new Discord.Client();
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

	client.on('guildMemberAdd', member => {
		const welcomeChannel = client.channels.cache.get("816408005117083679")
		console.log('new member!')
		var username = member.user.username
		var bel = ["A 3* wish @ has landed! \nPlease go to #fun-stuff to choose your element!",
				"A 4* wish @ has landed! \nPlease go to #fun-stuff to choose your element!",
				"A 5* wish @ has landed! \nPlease go to #fun-stuff to choose your element!"]
		var choice = 0
		var random = Math.floor(Math.random() * 100)
		console.log(random)
		if (random <= 15) {
			member.roles.add(member.guild.roles.cache.get("816426222380777473")).catch(console.error)
			choice = 2
		} else
		if (random < 40) {
			member.roles.add(member.guild.roles.cache.get("816426053957713950")).catch(console.error)
			choice = 1
		} else {
			member.roles.add(member.guild.roles.cache.get("816425804242092093")).catch(console.error)
			choice = 0
		}
		var wish = bel[choice];
	  wish = wish.replace("@", username)
		welcomeChannel.send(wish)
	});

client.login('token');
