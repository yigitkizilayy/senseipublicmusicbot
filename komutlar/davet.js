const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message) {



const embed = new Discord.RichEmbed()
.setDescription(`George Müzik botunu davet etmek için** [TIKLAMAN](https://discordapp.com/oauth2/authorize?client_id=597293641043673088&scope=bot&permissions=805314622)** yeterli!`)
.setAuthor(`Bot davet İstendi.`)
.setFooter(`${message.author.username} davet kullandı!`, message.author.avatarURL)
.setColor('RANDOM')
.setThumbnail(client.user.avatarURL)
return message.channel.send(embed)
};
  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['davet2','invite'],
  permLevel: 0 
};

exports.help = {
  name: 'davet',
  description: 'Bot Davet Linki Atar.',
  usage: 'davet'
}; 
 