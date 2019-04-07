const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Oto Rol Yardım")
  .setDescription('')
  .setColor('RED')
  .addField(`:robot: Komutlar :robot:`, '!kapatotorol: `otorol komutunu kapatır.` \n!otorol: `otorol @rolismi #kanalismi şeklinde otorol ayarlayabilirsiniz.`\n!kapatotoyazı: `Otorol mesajlarını kapator.`')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['otoy'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'oyardım',
    description: 'yardım',
    usage: 'yardım'
  };
 