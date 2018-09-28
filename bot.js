const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (!message.guild) return;

//=================================================================== kick
  if (message.content.startsWith('?kick')) {
    if(!message.member.roles.some(r=>["OWNERS", "Admin"].includes(r.name)) )
    return message.reply("what are you trying to do? Only the owners can use this command");
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('i was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('that user isn\'t in this guild!');
      }
    } else {
      message.reply('you didn\'t mention the user to kick!');
    }
  }
//=================================================================== ban
    if (message.content.startsWith('?ban')) {
      if(!message.member.roles.some(r=>["OWNERS"].includes(r.name)) )
      return message.reply("what are you trying to do? Only the owners can use this command");
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`successfully banned ${user.tag}`);
        }).catch(err => {
          message.reply('i was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('that user isn\'t in this guild!');
      }
    } else {
      message.reply('you didn\'t mention the user to ban!');
      }
    }
//===================================================================== help
    if (message.content === '?server') {
       message.channel.send(`:satellite_orbital:\n$GETTING SERVER INFORMATION:\n\nName: **${message.guild.name}**\nMembers: **${message.guild.memberCount}**\nServer created: **${message.guild.createdAt}**\nRegion: **${message.guild.region}**\n\n$end transmission\n:satellite:`);
       }
    else if (message.content === `?user`) {
    message.channel.send(`your username: **${message.author.username}**\nYour ID: **${message.author.id}**`);
       }
    if (message.content === '?ping') {
       message.channel.send(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
       }
 });
client.login(process.env.BOT_TOKEN);
