exports.run = (client, msg, args) => {
    let count = parseInt(args[0]) || 1;

    msg.delete();
    msg.channel.fetchMessages({ limit: Math.min(count, 100), before: msg.id })
        .then(messages => {
            Promise.all(messages.map(m => m.delete()))
                .catch(msg.error)
                .then(() => {
                    msg.channel.send(`<:swift:230345895852507136> Purged \`${count}\` messages.`)
                        .then(m => m.delete(400000));
                });
        }).catch(msg.error);
};

exports.conf = {
    enabledp: true,
    aliases: []
};

exports.help = {
    name: "purge",
    description: "deletes a bunch of messages.",
    usage: "purge [int]"
};