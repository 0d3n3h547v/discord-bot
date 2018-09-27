const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping!') {
       message.reply('ping?');
        message.edit('pong! Need help? ask here "=help"');
       }
});
client.on('message', message => {
    if (message.content === 'server') {
       message.reply('pong');
       }
});

client.login(process.env.BOT_TOKEN);
