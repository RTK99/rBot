const Ares = require('ares.js');
const config = require('./config.json');
const client = new Ares.Client({
    prefix: '>',
    selfbot: true,
    disabledServers: ['349243932447604736', '200661830648070145', '96230004047740928']
});

client.registerCommands();
client.registerDefaultCommands();
client.login(config.token);
