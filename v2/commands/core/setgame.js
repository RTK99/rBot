const { Command } = require('ares.js');
module.exports = class SetGameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'setgame',
            description: 'Sets or removes your current game.',
            usage: '[game]',
            aliases: ['sg', 'game']
        });
    }

    run (message, args) {
        const game = args.join(' ');
        if (!game) {
            this.client.user.setActivity(null);
            message.edit('Game successfully cleared! :ok_hand:');
        } else {
            this.client.user.setActivity(game);
            message.edit(`Congrats, you are now playing **${game}**! :ok_hand:`);
        }

    }
};