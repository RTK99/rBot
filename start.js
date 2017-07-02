const Discord = require('discord.js');
const client = new Discord.Client();
exports.client = client;
const config = require('./config.json');
const fs = require('fs');
const moment = require('moment')
client.utils = require('./utils')
client.reloader = require('./util/reloader')
require('./util/eventLoader')(client);
client.login(config.token);

const log = (msg) => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg}`)
};

  client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection()
    fs.readdir('./commands/', (err, files) => {
        if (err) throw err;
        log(`Loading a total of ${files.length} commands.`);
        files.forEach(f => {
            let props = require(`./commands/${f}`);
            log(`Loading ${props.help.name}.`);
           client.commands.set(props.help.name, props);
            props.conf.aliases.forEach(alias => {
                client.aliases.set(alias, props.help.name)
            })
        })
    });
