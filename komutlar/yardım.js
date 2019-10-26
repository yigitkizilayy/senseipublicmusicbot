const Discord = require('discord.js');
const ayarlar = require('moment');
const prefix = 'g!'

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setFooter('Black Bear Müzik', client.user.avatarURL) 
  .setDescription(`** Black Bear Müzik Komutları**\n\n:musical_note:\`b!oynat\` = **Yazdığınız şarkıyı çalar.** **(b!o)** \n :musical_note:\`b!geç\` = **Dinlediğiniz Şarkıyı Geçer.** **(b!g)** \n :musical_note:\`b!botçık\` = **Şarkıyı Durdurur Ve Bot Odadan Ayrılır.** **(b!ç)** \n :musical_note:\`b!duraklat\` = **Şarkıyı Durdurur**. **(b!d)** \n :musical_note:\`b!devamet\` = **Durdurulan Şarkı Devam Eder**.**(b!de)** \n :musical_note:\`b!davet\``)
  .setColor(0x00ffff)
  .setTimestamp()
 message.channel.send(embedyardim);
}
  
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'yardım',
  usage: 'yardım'
};