const Discord = require('discord.js');
const ayarlar = require('moment');
const prefix = 'g!'

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setDescription(`**═══════════════════════════════════════**\n\n<a:muzik:608207534695645184>\`?oynat\` = **Yazdığınız şarkıyı çalar.** \n <a:muzik:608207534695645184>\`?geç\` = **Dinlediğiniz Şarkıyı Geçer.** \n <a:muzik:608207534695645184>\`?durdur\` = **Şarkıyı Durdurur Ve Bot Odadan Ayrılır.** \n <a:muzik:608207534695645184>\`?duraklat\` = **Şarkıyı Durdurur**. \n <a:muzik:608207534695645184>\`?devamet\` = **Durdurulan Şarkı Devam Eder**. \n <a:muzik:608207534695645184>\`g!davet\` = **Botun Davet Linkini Atar.**.  \n\n**═══════════════════════════════════════**`)
  .setColor(0x00ffff)
  .setTimestamp()
  .setFooter(`${message.author.username} ➠ Tarafından İstendi.`, message.author.avatarURL)
 message.channel.send(embedyardim);
}
  
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y', 'komutlar', 'help', 'h'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};