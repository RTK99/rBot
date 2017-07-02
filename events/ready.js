const chalk = require('chalk')
module.exports = client => {
    console.log(chalk.bgRed.black(`Hello ${client.user.username}!`));
    console.log(`- Servers: ${client.guilds.size}\n- Users: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\n- Channels: ${client.channels.size}`)
    console.log('Bot Loaded.')
    client.user.setStatus('invisible');
    client.user.setAFK(true)
}