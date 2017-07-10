exports.run = async (client, msg, args) => {
    let count = parseInt(args[0]) || 1;

    msg.delete();
    msg.channel.fetchMessages({ limit: Math.min(count, 100), before: msg.id }).then(messages => {
        const prunable = messages.filter(m => m.author.id === client.user.id);

        return Promise.all(
            prunable.map(m => m.delete())
        ).then(() => {
            msg.channel.send(`:white_check_mark: Pruned \`${prunable.size}\` messages.`).then(m => m.delete({timeout: 2000}));
        });
    }).catch(msg.error);
};

exports.conf = {
    enabled: true,
    aliases: []
};

exports.help = {
    name: "prune",
    description: "A convenient way to delete your own messages.",
    usage: 'prune [amount]'
};