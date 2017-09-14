const hastebin = require('hastebin-gen');
const { Command } = require('ares.js');

module.exports = class HasteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'haste',
            description: 'Uploads code quickly to hastebin.',
            usage: '[code]',
            aliases: ['hastebin']
        });
    }

    async run (message, args) {
        let code = args.join(' ');
        if (!code) return message.edit('No code was speciifed.');
        let m = await message.channel.send('Uploading to Hastebin...');
        let res = await hastebin(code, "js");
        return m.edit('Here is your hastebin link: ' + res);
    }
};