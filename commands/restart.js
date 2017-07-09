exports.run = (client, msg) => {
    msg.edit('Restarting rBot... :thumbsup:').then(() => {
        process.exit(42);
    });
};

exports.conf = {
    enabled: true,
    aliases: []
};

exports.help = {
    name: 'restart',
    description: 'Restarts the selfbot.',
    usage: 'restart'
};