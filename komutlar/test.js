exports.run = function(client, message, args) {
        message.channel.send("Discord Sunucumuz: https://discord.gg/ZtTccY7");
    };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tst"],
  permLevel: 0
};

module.exports.help = {
  name: 'test',
  description: '',
  usage: 'test'
};
//techno bot
