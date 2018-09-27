const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?help') {
       message.reply('Need help?');
       }
});
client.on('message', message => {
    if (message.content === '?server') {
       message.channel.send(`#SERVER INFO:\nName: ${message.guild.name}\nMembers: ${message.guild.memberCount}`);
       }
});

client.login(process.env.BOT_TOKEN);
