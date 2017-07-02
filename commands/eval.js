const Discord = require('discord.js')
exports.run = (client, msg, args) => {
    function clean(text) {
  if (typeof(text) === 'string')
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
  else
      return text;
}
 try {
      const code = args.join(' ');
      let evaled = eval(code);
      let evaltime = [Date.now(evaled)]
      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled);
        if (evaled.includes(msg.client.token)) evaled = evaled.replace(client.token, 'Not for your prying eyes.');
        if (evaled.includes(client.token)) evaled = evaled.replace(client.token, 'Not for your prying eyes.');
        let embed = new Discord.RichEmbed()
        .setTitle(`Success, ${Math.round(evaltime) - msg.createdTimestamp}ms`)
        .setTimestamp()
        .setAuthor('Node.js Execution', 'https://cdn.discordapp.com/attachments/321417443585032203/327509162374201345/icon-node_js.png')
        .setColor('RANDOM')
        .addField(':inbox_tray: INPUT', "```js\n" + code + "```")
        .addField(':outbox_tray: OUTPUT', "```js\n" + clean(evaled) + "```")
        .setFooter('rBot')
        msg.delete(0)
        msg.channel.send({embed});
     } catch (err) {
      const code = args.join(' ');
      const embed = new Discord.RichEmbed()
      .setTitle('`Evaled Code`')
      .setColor(0xff0000)
      .setAuthor("Oops! Looks like there's an error!")
      .addField('INPUT', "```js\n" + code + "```")
      .addField('OUTPUT', "```js\n" + clean(err) + "```")
      .setFooter('rBot', 'https://cdn.discordapp.com/attachments/321417443585032203/327509162374201345/icon-node_js.png')
      msg.delete(0)
      msg.channel.send({embed});
    }
}


exports.conf = {
    enabled: true,
    aliases: ['ev']
};

exports.help = {
    name: "eval",
    description: 'Execute some javascript.',
    usage: 'eval [code]'
};
