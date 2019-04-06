exports.run = function(client, message, args) {
        message.channel.send("Discord Sunucumuz: https://discord.gg/GkzwCgM");
    };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tst"],
  permLevel: 0
};

module.exports.help = {
  name: 'test',
  kategori:"admin",
  description: '',
  usage: 'test'
};
//XiR
