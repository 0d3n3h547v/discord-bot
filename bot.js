const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?help') {
       message.reply('need help?\nHeres the known commands: ?server');
       }
});
client.on('message', message => {
    if (message.content === '?server') {
       message.channel.send(`#SERVER INFORMATION:\n\nName: ${message.guild.name}\nMembers: ${message.guild.memberCount}\nServer created: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
       }
});

client.login(process.env.BOT_TOKEN);
