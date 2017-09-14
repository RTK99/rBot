const Ares = require('ares.js');
const config = require('./config.json');
const client = new Ares.Client({
    prefix: '>',
    selfbot: true,
    disabledServers: []
})

client.registerCommands();
client.login(config.token);