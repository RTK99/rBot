const Discord = require('discord.js')
const { version: discordVersion } = require('discord.js');
const moment = require('moment')
require('moment-duration-format');

exports.run = async (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle('rBot Stats')
    .addField(':page_with_curl: Memory Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField(':clock11: Uptime:', `${duration}`, true)
    .addField(':man: Users', `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField('<:nitro:314068430611415041> Servers', `${client.guilds.size.toLocaleString()}`, true)
    .addField(':tv: Channels', `${client.channels.size.toLocaleString()}`, true)
    .addField('<:discord:314003252830011395> Discord.js version', `v${discordVersion}`, true)
    .addField('<:nodejs:329246117982371840> Node version', `${process.version}`, true)
    .addField('<:swift:230345895852507136> OS version:', `${process.platform}, ${process.arch}`, true)
    .setFooter(`${msg.createdAt}`, `${msg.author.displayAvatarURL({})}`)
    return msg.edit({embed});
};

exports.conf = {
    enabled: true,
    aliases: []
};

exports.help = {
    name: 'stats',
    description: "shows some stats about the bot.",
    usage: 'stats'
};