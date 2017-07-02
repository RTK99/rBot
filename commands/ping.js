exports.run = (client, msg, args) => {
  msg.channel.send('Pinging....')
  .then(m => {
      m.edit(`:ping_pong: Pong! Received in ${Date.now() - msg.createdTimestamp}ms :ping_pong:`);  
  })
};

exports.conf = {
    enabled: true,
    aliases: []
};

exports.help = {
    name: "ping",
    description: "Give a ping, get a pong.",
    usage: "ping"
};