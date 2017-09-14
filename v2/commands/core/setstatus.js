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
        })
    }

    run (message, args) {
        if (!s) return message.edit('No status specified.');
        let statuss = statuses[status.toLowerCase()];
        if (!statuss) {
            return msg.edit(`​Ya flop you provided a invaild status`​);
        }
        msg.client.user.setStatus(statuss).then(u => message.edit(`​Status changed to ${statuss}.`​)).catch(e => {
            msg.edit(`​**Bad,** error while trying to changing status for ${msg.client.user.tag} to: ${statuss}.\n\`​\`​\`​${e}\`​\`​\`​`​);
        });
    }
}
