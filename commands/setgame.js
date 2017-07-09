exports.run = async (client, msg, args) => {
    const game = args.join(' ')
    if (!game) {
        await client.user.setGame(null, null)
        msg.reply('Successfully cleared your game!').then(m => {
            m.delete(3000)
        })
    } else {
    await client.user.setGame(game)
    msg.reply(`Successfully changed game to **${game}**!`).then(m => {
        m.delete(3000)
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