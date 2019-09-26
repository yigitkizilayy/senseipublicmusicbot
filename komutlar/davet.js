const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message) {



const embed = new Discord.RichEmbed()
.setDescription(`PLUSKLY Müsic Botunu Davet Etmek İçin** [TIKLAMAN](daevt link)** Yeterli!`)
.setAuthor(`Demek Botumuzun Davet Linkini İstedin.`)
.setColor('RANDOM')
.setThumbnail(client.user.avatarURL)
 .setFooter('PLUSKLY Müsic', client.user.avatarURL)
return message.channel.send(embed)
};
  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'davet',
  description: 'Bot Davet Linki Atar.',
  usage: 'davet'
}; 
 