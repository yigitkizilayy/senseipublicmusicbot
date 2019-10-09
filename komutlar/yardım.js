const Discord = require('discord.js');
const ayarlar = require('moment');
const prefix = 'g!'

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setFooter('Technology Codes Music', client.user.avatarURL) 
  .setDescription(`** Technology Code's Music Bot Komutları**\n\n:musical_note:\`tc!oynat\` = **Yazdığınız şarkıyı çalar.** **(tc!o)** \n :musical_note:\`tc!geç\` = **Dinlediğiniz Şarkıyı Geçer.** **(tc!g)** \n :musical_note:\`tc!botçık\` = **Şarkıyı Durdurur Ve Bot Odadan Ayrılır.** **(tc!ç)** \n :musical_note:\`tc!duraklat\` = **Şarkıyı Durdurur**. **(tc!d)** \n :musical_note:\`tc!devamet\` = **Durdurulan Şarkı Devam Eder**.**(tc!de)** \n :musical_note:\`tc!davet\``)
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
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};