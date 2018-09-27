const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?help') {
       message.reply("need help?\nHeres the known commands:\n\n`?server`\n`?user`");
       }
});
client.on('message', message => {
    if (message.content === '?server') {
       message.channel.send(`:satellite_orbital:\n$GETTING SERVER INFORMATION:\n\nName: **${message.guild.name}**\nMembers: **${message.guild.memberCount}**\nServer created: **${message.guild.createdAt}**\nRegion: **${message.guild.region}**\n\n$end transmission\n:satellite:`);
       }
    else if (message.content === `?user`) {
    message.channel.send(`your username: **${message.author.username}**\nYour ID: **${message.author.id}**`);
       }
    
 client.on('message', message => {
    if(message.content === '?purge') {
    // This command removes all messages from all users in the channel, from 2 up to 10000.
    const deleteCount = parseInt(args[0], 1000);
    if(!deleteCount || deleteCount < 2 || deleteCount > 10000)
return message.reply("Please provide a number between 2 and 10.000 for the number of messages to delete");
    }
 }
});

client.login(process.env.BOT_TOKEN);
