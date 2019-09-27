const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
  .setFooter('PLUSKLY Müsic', client.user.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .addField('**Yapımcım: **', '<@624808655249997826>')
     .addField('Bir S')
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcm',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapımcım'
};
