const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
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
  if (message.content.startsWith(config.prefix + "eval")) {
    if(message.author.id !== config.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
 });
client.login(process.env.BOT_TOKEN);
