const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?help') {
       message.reply("need help?\n```Heres the known commands:\n?server\n?user```");
       }
});
client.on('message', message => {
    if (message.content === '?server') {
       message.channel.send("#SERVER INFORMATION:\n\n`Name:` ${message.guild.name}\n`Members:` ${message.guild.memberCount}\n`Server created:` ${message.guild.createdAt}\n`Region:` ${message.guild.region}");
       }
     else if (message.content === `?user`) {
    message.channel.send("`your username:` ${message.author.username}\n`Your ID:` ${message.author.id}");
       }
});

client.login(process.env.BOT_TOKEN);
