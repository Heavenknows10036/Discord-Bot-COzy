  const Discord = require('discord.js');
  const bot = new Discord.Client();
  const token = process.env.token



  bot.once('ready', () => {

    console.log('Ready!');
    bot.user.setActivity("DM to post in Secret Files")
  });

  bot.login(token);

  bot.on('message', function(message){
      if (message.channel.type === 'dm'){
          bot.channels.get('590518662272778240').send({embed:{
            description: message.content,
            color: 0X762AE5

          }})
          bot.channels.get('590504448124649472').send(message.author.username + message.author.tag + "    " + message.author.id + " said " + message.content)


      }
  })
