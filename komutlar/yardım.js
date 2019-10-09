const Discord = require('discord.js');
const ayarlar = require('moment');
const prefix = 'g!'

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setFooter('Technology Codes Music', client.user.avatarURL) 
  .setDescription(`** Technology Code's Music Bot Komutları**\n\n:musical_note:\`tk!oynat\` = **Yazdığınız şarkıyı çalar.** **(tk!o)** \n :musical_note:\`tk!geç\` = **Dinlediğiniz Şarkıyı Geçer.** **(tk!g)** \n :musical_note:\`tk!botçık\` = **Şarkıyı Durdurur Ve Bot Odadan Ayrılır.** **(tk!ç)** \n :musical_note:\`tk!duraklat\` = **Şarkıyı Durdurur**. **(tk!d)** \n :musical_note:\`tk!devamet\` = **Durdurulan Şarkı Devam Eder**.**(tk!de)** \n :musical_note:\`tk!davet\``)
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