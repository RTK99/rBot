exports.run = async (client, msg, args) => {
    const game = args.join(' ')
    if (!game) {
        msg.delete()
        await client.user.setGame(null, null)
        msg.reply('Successfully cleared your game!').then(m => {
            m.delete({timeout: 2000})
        })
    } else {
    msg.delete()
    await client.user.setGame(game)
    msg.reply(`Successfully changed game to **${game}**!`).then(m => {
        m.delete({timeout: 2000})
    })
    }
}

exports.conf = {
    enabled: 'true',
    aliases: []
}

exports.help = {
    name: 'setgame',
    description: 'Sets your game (others can see, not you)',
    usage: 'setgame <game>'
}