const Discord = require('discord.js');
const dateFormat = require('dateformat');
exports.run = async (client, msg) => {

var user;
let member = msg.mentions.users.first();
    let author = msg.author;
    if(member) {
         user = member;
    } else {
         user = author;
    }
member = msg.guild.member(user);
let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
   if (roles.length < 1) roles = ['None'];
const millisCreated = new Date().getTime() - user.createdAt.getTime();
const daysCreated = millisCreated/1000/60/60/24;
const millisJoined = new Date().getTime() - member.joinedAt.getTime();
const daysJoined = millisJoined/1000/60/60/24;

 const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTimestamp()
     .setThumbnail(`${user.displayAvatarURL('png')}`)
     .addField("User:", `${user.tag}`, true)
     .addField("Playing:", user.presence.game ? user.presence.game.name : 'Not playing a game.', true)
      .addField("Status:", `${user.presence.status}`, true)
     .addField('Days since joining:', `${daysJoined.toFixed(0)}`, true)
     .addField("Join Date:", `${dateFormat(member.joinedAt)}`, true)
     .addField('Days Since Creation:', `${daysCreated.toFixed(0)}`, true)
     .addField("Account Created:", `${dateFormat(user.createdAt)}`)
     .addField('Roles', `${roles.join(', ')}`, true)
     .setFooter(`${user.id}`);
     msg.channel.send({embed}).catch(console.error);
};

exports.conf = {
    enabled: true,
    aliases: []
};

exports.help = {
    name: 'userinfo',
    decription: "testing.",
    usage: 'userinfo [mention]'
};