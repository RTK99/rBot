const { Command } = require('ares.js');
let statuses = ['idle', 'online', 'dnd', 'invisible']
module.exports = class StatusCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'setstatus',
            description: 'Changes your current status.',
            usage: '[status]',
            aliases: ['status']
        })
    }

    run (message, args) {
        let s = args.join(' ').toLowerCase();
        if (!s) return message.edit('No status specified.');
        if (!statuses.includes(s)) return message.channel.send('Sorry, not a valid status.');
        this.client.user.setStatus(s);
        return message.edit('Status changed!');
    }
}
