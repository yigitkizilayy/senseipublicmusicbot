const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message) {



const embed = new Discord.RichEmbed()
.setDescription(`PLUSKLY Müsic Botunu Destek Sunucusu İçin** [TIKLAMAN](https://discord.gg/WwEm4S9)** Yeterli!`)
.setAuthor(`Demek Botumuzun Destek Sunucusunu İstedin.`)
.setColor('RANDOM')
.setThumbnail(client.user.avatarURL)
 .setFooter('PLUSKLY Müsic', client.user.avatarURL)
return message.channel.send(embed)
};
  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [`ds`],
  permLevel: 0 
};

exports.help = {
  name: 'destek-sunucu',
  description: 'Botun Destek Sunucusunu Atar.',
  usage: 'desteksunucusu'
}; 
 