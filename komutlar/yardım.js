const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor('RANDOM')
  .setTitle('```Techno Müzik Bot Komutları```')
  .addField(`Bot Komutları`, '!prefix: `botun prefixini değiştirebilirsiniz.` \n!davet: `botu davet edebilirsiniz.` \n!ping: `botun ping değerlerini görebilirsiniz.` \n!sil: `bulunduğunuz yerdeki mesajları silebilirsiniz.`')
  .addField(`Müzik Komutları`, '!çal: `İstediğin şarkıyı çalar.`\n!duraklat: `Müziği duraklatır.`\n!devamet: `Müziği devam ettirir.`\n!tekrar:` Müziği tekrarlatır.`\n!geç: `Geçerli çalınan müziği geçer`\n!dur: `Müziği kapatır.`')
  .addField(`Sunucu Komutları`, '!h-e: `Sunucunda everyone ve here engeller` \n!otorol: `sunucunuza gelen kislere otomatik rol verir detaylı bilgi için !oyardım.` \n!girisçikis:` Resimli gelen-giden ayarlar.`\n!sayaç: `sunucunuza sayaç ekleyebilirsiniz` \n!sa-as:`ayarlamalı sa-as komutu.`')
  .addField(`Moderasyon Komutları`, '!ban: `Sunucuda istedğiniz kişiyi banlar.` \n!kick: `Sunucunuzdaki kişileri kicklersiniz` \n!modlog:` sunucunuzda olan bitenden haberdar olursunuz.`\n!linkengel: `sunucunuzda yapılan reklamları engeller`')
  .addField(`Kullanıcı Komutları`, '!döviz: `Güncel kur fiyatlarını görürsünüz`\n!havadurumu: `Seçtiğiniz ilin hava durumunu gösterir.`\n!steam: `seçtiğiniz oyun hakkında bilgiler verir.`')
  .setDescription('Bottaki Komutlar Yenilenmektedir. Detaylı Bilgi İçin !davet Destek sunucusuna gelin!.')
 //.addField(`------------------`, '-')
 // .addField(`:robot: Bot Commands :robot:`, '!prefix: `Changes prefix.` \n!davet: `İnvite the bot.` \n!ping: `ping.` \n!clear: `clear the messages.`')
 // .addField(`:musical_note: Music Commands :musical_note:`, '!play: `playing to music`. \n!pause: `stop music.` \n!continuation: `continues music.` \n!again: `repeats music` \n!passes: `passes music` \n!stop: `stop the music`')
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
 