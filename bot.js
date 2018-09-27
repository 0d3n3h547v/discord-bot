const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?help') {
       message.reply("need help?\nHeres the known commands:\n\n`?server`\n`?user`\n?ping");
       }
    });
client.on('message', message => {
    if (message.content === '?ping') {
       message.channel.send(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
       }
});
client.on('message', message => {
    if (message.content === '?server') {
       message.channel.send(`:satellite_orbital:\n$GETTING SERVER INFORMATION:\n\nName: **${message.guild.name}**\nMembers: **${message.guild.memberCount}**\nServer created: **${message.guild.createdAt}**\nRegion: **${message.guild.region}**\n\n$end transmission\n:satellite:`);
       }
    else if (message.content === `?user`) {
    message.channel.send(`your username: **${message.author.username}**\nYour ID: **${message.author.id}**`);
       }
});

client.login(process.env.BOT_TOKEN);
