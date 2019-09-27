const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setDescription(`:x: Bu komut özel mesajlarda kullanıma kapatılmıştır.`)
  return message.author.send(ozelmesajuyari); }
//eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.send(`Geçerli bir komut adı girmelisin.`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setTitle(`${command.help.name} Komutu İçin Bilgiler`)
.addField(':comet: Hakkında', `${command.help.description}`)
.addField('🌊 Kullanım', `${prefix}${command.help.usage}`)
.addField('🛶 Alternatifler', `${command.conf.aliases[0] ? command.conf.aliases.join(", ") : "Herhangi bir alternatifi bulunmuyor."}`)
.setFooter(`${client.user.username} - 2019`, client.user.avatarURL)
message.channel.send(embed)
};
    }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
kategori: 'bot'
};

exports.help = {
  name: 'komut',
  description: 'Komut yardımlarını gösterir.',
  usage: 'komut'
};