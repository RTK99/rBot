exports.run = (client, msg, args) => {
 let command;
 if (client.commands.has(args[0])) {
     command = args[0]
 } else if (client.aliases.has(args[0])) {
     command = client.aliases.get(args[0]);
 }
 if (!command) {
     return msg.edit(`I cannot find the command ${args[0]}.`);
 } else {
     msg.channel.send(`Attempting to reload ${command}`)
     .then(m => {
         client.reloader.reload(command)
         m.edit(`<:check:314349398811475968> Successfully reloaded the command ${command}.`)
     
     .catch(e => {
         m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``)
     })
   })
 }

};

exports.conf = {
    enabled: true,
    aliases: []
};

exports.help = {
    name: "reload",
    description: "Reloads the command file if it has been changed.",
    usage: "reload <commandname>"
};