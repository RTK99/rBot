const { Command } = require('ares.js');
const { MessageEmbed } = require('discord.js');
const { version: discordVersion } = require('discord.js');

module.exports = class StatsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stats',
            description: 'Shows some stats about rBot.',
            aliases: ['info', 'uptime']
        });
    }

    async run (message, args) {
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter('rBot')
            .setAuthor('rBot Stats', this.client.user.displayAvatarURL())
            .setDescription(`**Memory Usage:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n**Users:** ${this.client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\n**Channels:** ${this.client.channels.size.toLocaleString()}\nServers: ${this.client.guilds.size.toLocaleString()}\n**Discord.js version:** v${discordVersion}\n**Node.js version:** ${process.version}`);
        message.edit({embed});
    }
};