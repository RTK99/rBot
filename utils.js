const client = require('./start');
const got = require('got')
const url = require('url')
const RichEmbed = require('discord.js').RichEmbed;
exports.hastebinUpload = text => {
    return got.post(url.resolve('https://hastebin.com', 'documents'), {
        body: text,
        json: true,
        headers: {
            'Content-Type': 'text/plain'
        }
    })
        .then(res => {
            if (res && res.body && res.body.key) {
                const key = res.body.key;
                return {
                    key: key,
                    success: true,
                    url: `https://hastebin.com/${key}`,
                    rawUrl: `https://hastebin.com/raw/${key}`
                };
            } else {
                return {
                    success: false
                };
            }
        });
};

exports.parseArgs = (args, options) => {
    if (!options)
        return args;
    if (typeof options === 'string')
        options = [options];

    let optionValues = {};

    let i;
    for (i = 0; i < args.length; i++) {
        let arg = args[i];
        if (!arg.startsWith('-')) {
            break;
        }

        let label = arg.substr(1);

        if (options.indexOf(label + ':') > -1) {
            let leftover = args.slice(i + 1).join(' ');
            let matches = leftover.match(/^"(.+?)"/);
            if (matches) {
                optionValues[label] = matches[1];
                i += matches[0].split(' ').length;
            } else {
                i++;
                optionValues[label] = args[i];
            }
        } else if (options.indexOf(label) > -1) {
            optionValues[label] = true;
        } else {
            break;
        }
    }
     return {
        options: optionValues,
        leftover: args.slice(i)
    };
};

exports.embed = (title, description = '', fields = [], options = {}) => {
    let url = options.url || '';

    if (options.inline) {
        if (fields.length % 3 === 2)
            fields.push({ name: '\u200b', value: '\u200b' });
        fields = fields.map(obj => { obj.inline = true; return obj; });
    }
    if (url !== '') description += '\n';

    return new RichEmbed({ fields, video: options.video || url })
        .setTitle(title)
        .setColor('RANDOM')
        .setDescription(description)
        .setImage(options.image || url)
        .setTimestamp(options.timestamp ? timestampToDate(options.timestamp) : null)
        .setFooter(options.footer === true ? randomFooter() : (options.footer ? options.footer : ''), options.footer ? client.user.avatarURL : undefined)
        .setAuthor(options.author === undefined ? '' : options.author)
        .setThumbnail(options.thumbnail || url);
};