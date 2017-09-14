const { Command } = require('ares.js');
let statuses = {
    "online": "online",
    "on": "online",
    "invisible": "invisible",
    "offline": "invisible",
    "off": "invisible",
    "invis": "invisible",
    "i": "invisible",
    "dnd": "dnd",
    "idle": "idle",
    "Online": 'online',
    "Idle": "idle",
    "Do Not Disturb": 'dnd',
    'Offline': 'invisible'
};

module.exports = class StatusCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'setstatus',
            description: 'Changes your current status.',
            usage: '[status]',
            aliases: ['status']
        });
    }

    run (message, args) {
        let s = args.join(' ');
        if (!s) return message.edit('No status Specified.');
        let statuss = statuses[s.toLowerCase()];
        if (!statuss) {
            return message.edit("Ya flop you provided a invaild status");
        }
        message.client.user.setStatus(statuss)
            .then(s => message.edit(`Successfully set the new status to **${statuss}** :ok_hand:`))
            .catch(e => message.edit(`oops, there was an error!\n${e}`));
    }
};
