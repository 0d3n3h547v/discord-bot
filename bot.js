const Discord = require('discord.js');
const client = new Discord.Client();
const cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');

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
       message.channel.send(`:satellite_orbital:\`\`\`js\n$GETTING SERVER INFORMATION:\n\nName: ${message.guild.name}\nServer ID: ${message.guild.id}\nMembers: ${message.guild.memberCount}\nServer build: ${message.guild.createdAt}\nServer Creator: ${message.guild.owner}\nOwner ID: ${message.guild.ownerID}\nRegion: ${message.guild.region}\nVerification level: ${message.guild.verificationLevel}\nServer verified: ${message.guild.verified}\n\n\n$end transmission\`\`\``);
       }
    else if (message.content === `?user`) {
    message.channel.send(`**Your username:** \`${message.author.username}\`\n**Your ID:** \`${message.author.id}\`\n**Created on:** \`${message.author.createdAt}\`\n**Discord tag:** \`${message.author.tag}\`\n`);
       }
    if (message.content === '?ping') {
       message.channel.send(`:ping_pong: motherfucker! Latency is **${Math.round(client.ping)}ms**`);
       }
  if (message.content === '?embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new Discord.RichEmbed()
      // Set the title of the field
      .setTitle('Server Information')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription(`\n**Name:** ${message.guild.name}\n**Members:** ${message.guild.memberCount}\n**Server created:** ${message.guild.createdAt}\n**Region:** ${message.guild.region}`);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
  
if (message.content.startsWith('?google')) {
// Depending on your command framework (or if you use one), it doesn't have to
// edit messages so you can rework it to fit your needs. Again, this doesn't have
// to be async if you don't care about message editing.
async function googleCommand(msg, args) {

   // These are our two variables. One of them creates a message while we preform a search,
   // the other generates a URL for our crawler.
   let searchMessage = await message.reply('Searching... Sec.');
   let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(msg.content)}`;

   // We will now use snekfetch to crawl Google.com. Snekfetch uses promises so we will
   // utilize that for our try/catch block.
   return snekfetch.get(searchUrl).then((result) => {

      // Cheerio lets us parse the HTML on our google result to grab the URL.
      let $ = cheerio.load(result.text);

      // This is allowing us to grab the URL from within the instance of the page (HTML)
      let googleData = $('.r').first().find('a').first().attr('href');

      // Now that we have our data from Google, we can send it to the channel.
      googleData = querystring.parse(googleData.replace('/url?', ''));
      searchMessage.edit(`Result found!\n${googleData.q}`);

  // If no results are found, we catch it and return 'No results are found!'
  }).catch((err) => {
     searchMessage.edit('No results found!');
     });
   }
 }
      if(command === "?purge") {
    const deleteCount = parseInt(args[0], 10);
  async if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    const fetched = message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
            }
      }
 });
client.login(process.env.BOT_TOKEN);
