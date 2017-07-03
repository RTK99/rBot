const config = require('../config.json')
module.exports = msg => {
    const client = msg.client;
    if (msg.author.id !== client.user.id) return;
    if (config.blacklisted_servers.includes(msg.guild.id)) return;
    if (!msg.content.startsWith(config.prefix)) return;
    let cmdName = msg.content.split(' ')[0].slice(config.prefix.length)
    let params = msg.content.split(' ').slice(1);
    let cmd;
    if (client.commands.has(cmdName)) {
        cmd = client.channels.get(cmdName);
    } else if (client.aliases.has(cmdName)) {
        cmd = client.commands.get(client.aliases.get(cmdName));
    }
 
    const args = msg.content.split(' ');
    const command = args.shift().slice(config.prefix.length)
    const commandFile = require(`../commands/${command}`);
    
    try {
        commandFile.run(client, msg, args);
    } catch (err) {
        console.log(`Failed to load command ${command}`);
    }
};
