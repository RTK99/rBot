const Ares = require('ares.js');
const config = require('./config.json');
const { WebhookClient } = require('discord.js');
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
    if (message.content.includes(message.client.user.username) || message.content.includes(message.guild.me.displayName)) {
        let webhook = new WebhookClient(config.webhookID, config.webhookToken);
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`${message.content}\n\nServer: ${message.guild.name}\nChannel: ${message.channel}`)
            .setTimestamp()
            .setFooter('Selfbot Logs');
        webhook.send(client.user, {embed});
    }
});
