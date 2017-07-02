const Discord = require('discord.js')
exports.run = (client, msg, args) => {
    if (args.length < 1) throw 'You must specify something to embed.'

     let parsed = client.utils.parseArgs(args, ['f', 'ft:', 'd', 't:', 'c:', 'r', 'i:', 'a:', 'th:']);
     const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(`${parsed.options.t || '', parsed.leftover.join(' ')}`)
     msg.delete()
     msg.channel.send({embed})
};

exports.conf = {
    enabled: true,
    aliases: []
}

exports.help = {
    name: 'embed',
    description: 'embeds any text you throw at it.',
    usage: 'embed [text]'
};