exports.run = (client, msg, args) => {
    if (args.length < 1) {
        msg.reply('You must have something to upload!');
    }

    let parsed = client.utils.parseArgs(args, 'r');

    msg.edit(':arrows_counterclockwise: Uploading...').then(() => {
        client.utils.hastebinUpload(parsed.leftover.join(' ')).then(({url, rawUrl}) => {
            if (!url) {
                msg.reply('Failed to upload, no key was returned!');
                return;
            }
            if (parsed.options.r) {
                msg.edit(`:white_check_mark: ${rawUrl}`);
            } else {
                msg.edit(`:white_check_mark: ${url}`);
            }
        }).catch(err => {
            msg.reply(`:no_entry_sign: Failed to upload: ${err}`, 5000);
        });
    });
};

exports.conf = {
    enabled: true,
    aliases: []
};

exports.help = {
    name: "haste",
    description: "Quickly sends code to hastebin.",
    usage: "haste [code]"
};