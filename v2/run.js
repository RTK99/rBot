const Ares = require('ares.js');
const config = require('./config.json');
const client = new Ares.Client({
    prefix: '>',
    selfbot: true,
    disabledServers: ['349243932447604736']
});

client.registerCommands();
client.login(config.token);
