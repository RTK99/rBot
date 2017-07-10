const Discord = require('discord.js')
exports.run = async function (client, msg, args) {
    if (!args[0]) return msg.reply('Please provide a valid message ID.')
     try {
         msg.channel.fetchMessage(args[0]).then(message => {
             const embed = new Discord.RichEmbed() 
             .setColor('RANDOM')
             .setAuthor(message.author.tag, message.author.displayAvatarURL({}))
             .setDescription(message.content)
             .setFooter(message.createdAt)
             msg.delete()
             msg.channel.send({embed})
         })
     } catch (error) {
         return msg.reply('That message could not be found.')
     }
}

exports.conf = {
    enabled: true,
    aliases: []
};

exports.help = {
    name: "quote",
    description: 'Quote a person provided an ID was given.',
    usage: 'quote [ID]'
};
