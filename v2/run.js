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
    if (message.content.includes(message.client.user.username) || message.mentions.users.first() === message.client.user) {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(message.content)
            .setTimestamp()
            .setFooter('Mention Tracker');
        client.channels.get('360396387290185730').send({embed});
      
    }
});
