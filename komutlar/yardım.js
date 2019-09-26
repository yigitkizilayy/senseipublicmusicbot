const Discord = require('discord.js');
const ayarlar = require('moment');
const prefix = 'g!'

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setFooter('PLUSKLY Müsic', client.user.avatarURL) 
  .setDescription(`**PLUSKLY Müsic Bot Komutları**\n\n:musical_note:\`p!oynat\` = **Yazdığınız şarkıyı çalar.** **(p!o)** \n :musical_note:\`p!geç\` = **Dinlediğiniz Şarkıyı Geçer.** **(p!g)** \n :musical_note:\`p!botçık\` = **Şarkıyı Durdurur Ve Bot Odadan Ayrılır.** **(p!ç)** \n :musical_note:\`p!duraklat\` = **Şarkıyı Durdurur**. **(p!d)** \n :musical_note:\`p!devamet\` = **Durdurulan Şarkı Devam Eder**.**(p!de)** \n :musical_note:\`p!davet\` = **Botun Davet Linkini Atar.**.  \n`)
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
  name: 'komutlar',
  description: 'yardım',
  usage: 'yardım'
};