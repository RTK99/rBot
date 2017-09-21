const Ares = require('ares.js');
const config = require('./config.json');
const { MessageEmbed } = require('discord.js');
const client = new Ares.Client({
    prefix: '>',
    selfbot: true,
    disabledServers: ['349243932447604736', '200661830648070145', '96230004047740928']
});

client.registerCommands();
client.registerDefaultCommands();
client.login(config.token);

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.includes(message.client.user.username) || message.content.includes(message.guild.me.displayName) || message.mentions.users.first() && message.mentions.users.first().id === client.user.id) {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(message.content)
            .setTimestamp()
            .setFooter('Mention Tracker');
        message.client.channels.get('360396387290185730').send('@everyone', {embed});
    }
});
