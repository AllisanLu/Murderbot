const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
  console.log('new member!')
  var ReBeL = member.user.username;
  var bel = ["A 3* wish @ has landed!","A 4* wish @ has landed!","A 5* wish @ has landed!"]
  var choice = 0
  var random = Math.floor(Math.random() * 100)
  console.log(random);
  if (random < 10) {
    choice = 2
  } else if (random < 20) {
    choice = 1
  } else {
    choice = 0
  }
  var moon = bel[choice];
  console.log(moon);
  setTimeout(function() {
      moon = moon.replace('@', ReBeL)
      client.channels.get("798329584943759402").send(moon)
  })
});

client.login('Nzk1NjkzMjc5NjA5MzU2MzE5.X_NFHQ.3qR-79R9si5X3k7PqqOhxWco2wI');
