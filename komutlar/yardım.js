const Discord = require('discord.js');
const ayarlar = require('moment');
const prefix = 'g!'

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setFooter('PLUSKLY Müsic', client.user.avatarURL) 
  .setDescription(`**PLUSKLY Müsic 2 Bot Komutları**\n\n:musical_note:\`pm+oynat\` = **Yazdığınız şarkıyı çalar.** **(pm+o)** \n :musical_note:\`pm+geç\` = **Dinlediğiniz Şarkıyı Geçer.** **(pm+g)** \n :musical_note:\`pm+botçık\` = **Şarkıyı Durdurur Ve Bot Odadan Ayrılır.** **(pm+ç)** \n :musical_note:\`pm+duraklat\` = **Şarkıyı Durdurur**. **(pm+d)** \n :musical_note:\`pm+devamet\` = **Durdurulan Şarkı Devam Eder**.**(pm+de)** \n :musical_note:\`pm!davet\``)
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