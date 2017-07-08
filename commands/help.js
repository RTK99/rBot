const config = require('../config.json');
const Discord = require('discord.js')
const randomcolor = '0x'+Math.floor(Math.random()*16777215).toString(16);


exports.run = (client, msg, args) => {
    if (!args[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        let embed = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTimestamp()
             .addField('Commands List', `To get more info about a command, type ${config.prefix}help [command]`)
             .setDescription(`${client.commands.map(c => `${c.help.name} ${' '.repeat(longest - c.help.name.length)}~ ${c.help.description}`).join('\n')}`)
             .setFooter('rBot')
             msg.channel.send({embed})
    } else {
         let command = args[0];
         if (client.commands.has(command)) {
             command = client.commands.get(command);
             let embed = new Discord.RichEmbed()
                .setTitle(`${config.prefix}${command.help.name}`)
                .setTimestamp()
                .setColor('RANDOM')
                .setDescription(`${command.help.description}\n\n**Usage:** ${command.help.usage}`)
                .setFooter('rBot')
                msg.channel.send({embed})
        }
    }
};

exports.conf = {
    enabled: true,
    aliases: []
};

exports.help = {
    name: 'help',
    description: 'Displays all of the commands available.',
    usage: 'help [command]'
};
