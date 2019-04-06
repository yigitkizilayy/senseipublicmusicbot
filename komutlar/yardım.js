const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor('RANDOM')
  .setTitle('```Techno Müzik Bot Komutları```')
  .addField(`:robot: Bot Komutları :robot:`, '!prefix: `botun prefixini değiştirebilirsiniz.` \n!davet: `botu davet edebilirsiniz.`')
  .addField(`:musical_note: Müzik Komutları :musical_note:`, '!çal: `İstediğin şarkıyı çalar.`\n!duraklat: `Müziği duraklatır.`\n!devam: `Müziği devam ettirir.`\n!tekrar:` Müziği tekrarlatır.`\n!geç: `Geçerli çalınan müziği geçer`\n!stop: `Müziği kapatır.`')
 .addField(`------------------`, '-')
  .addField(`:robot: Bot Command :robot:`, '!prefix: `Changes prefix.` \n!davet: `İnvite the bot`')
  .addField(`:musical_note: Music Commands :musical_note:`, '!play: `playing to music`. \npauses: `stop music.` \ncontinuation: `continues music.`')
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
    aliases: ['help', 'y'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
 