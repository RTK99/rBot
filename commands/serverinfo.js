const dateFormat = require('dateformat');
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const Discord = require('discord.js');
exports.run = async (client, msg) => {

  const millis = new Date().getTime() - msg.guild.createdAt.getTime();
  const days = millis/1000/60/60/24;
  const verificationLevels = ['None', 'Low', 'Medium', 'Insane'];
  let server = msg.guild;
  const embed = new Discord.RichEmbed()
  .addField(`${server.name}`, "*Server info*")
  .setTimestamp()
  .setThumbnail(`${server.iconURL('png')}`)
  .setColor('RANDOM')
  .addField('Created on:', `${dateFormat(server.createdAt)}`, true)
  .addField('Days since creation:', `${days.toFixed(0)}`, true)
  .addField('Online/Total Members:', `${msg.guild.members.filter(m => m.presence.status !== 'offline').size} / ${msg.guild.memberCount}`, true)
  .addField('Channels:', `${server.channels.size}`, true)
  .addField('Default Channel:', `${server.defaultChannel}`, true)
  .addField('Region:', `${server.region}`, true)
  .addField('Owner:', `${server.owner.user.username}`, true)
  .addField('Roles:', `${server.roles.size}`, true)
  .addField('Verification Level:', `${verificationLevels[msg.guild.verificationLevel]}`)
  .setFooter(`Guild ID: ${server.id} | rBot`);
   msg.delete();
   msg.channel.send({embed});
};

exports.conf ={
    enabled: true,
    aliases: []
};

exports.help ={
    name: 'serverinfo',
    description: 'Get info about a server.',
    usage: 'serverinfo'
};
