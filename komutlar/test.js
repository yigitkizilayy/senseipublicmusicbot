const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:microphone: MÜZİK YARDIM BOT :headphones:**")
    .setColor("RANDOM")
    .addField(`KOMUTLAR`, '!çal: `Belirtilen müziği çalmaya yarar.` \nBotun Geliştiricisi <@497754710896410654>')
    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'help', 'y'],
 
  permLevel: 0,
  kategori: 'genel'
};

exports.help = {
  name: 'yardım',
  category: 'genel',
  description: 'Tüm komutları listeler.',
  usage: 'yardım veya yardım <komut adı>'
};