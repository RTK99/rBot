const { promisify } = require('util')
const Discord = require('discord.js')
const exec = promisify(require('child_process').exec)

exports.run = async (client, msg, args) => {
    let input = args.join(' ')

    try {
   let result = await exec(input);
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor('Shell Execution', 'https://codemaxx.github.io/assets/images/emoji/terminal.png')
    .addField(':outbox_tray: Output',`\`\`\`\n${result.stdout}\n\`\`\``)
    .setFooter('rBot')
     msg.delete()
     msg.channel.send({embed})
     console.log(embed)
   } catch (error) {
     let result = await exec(input);
      const outerr = require('util').inspect(result.stderr)
      let embed2 = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('Uh oh..there was an error')
      .addField(`Output',``\`\`\`\n${outerr}\n\`\`\``)
      .setFooter('rBot')
       msg.channel.send({ embed: embed2 })
      console.log(embed2)
    }
};

exports.conf = {
    enabled: true,
    aliases: ["bash"]
};

exports.help = {
    name: "exec",
    description: "Execute a command in the shell.",
    usage: 'exec [input]'
}
