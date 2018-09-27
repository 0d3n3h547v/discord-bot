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
       message.channel.send(`Server infos\nServer name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
       }
});

client.login(process.env.BOT_TOKEN);
