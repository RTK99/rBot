const { Command } = require('ares.js');
const { MessageEmbed } = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'embed',
            description: 'Embeds some text.',
            aliases: ['em'],
            usage: '[text]'
        });
    }

    run (message, args) {
        let text = args.join(' ');
        if (!text) return message.edit(':x: Please specify text to embed.');
        let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setFooter('rBot')
            .setDescription(text);
        message.edit({embed});
    }
};