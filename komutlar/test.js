const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`:headphones:= Yardım Menüsü =:microphone:`
.setColor('RANDOM')
                             
​
${prefix}oynat    ➠  Belirtilen müziği oynatmayı sağlar.
${prefix}durdur   ➠  Belirtilen müziği durdurmayı sağlar.
${prefix}geç      ➠  Sıradaki müziğe geçiş yapar.
${prefix}kuyruk   ➠  Sıradaki müzikleri gösteririr.
${prefix}ses      ➠  Sesi belirtilen miktar kadar arttırır/azaltır. 
${prefix}müzik    ➠  Müzik komutlarını gösterir.
​
# Komutlar hakkında yardım almak icin ${prefix}yardım <komut ismi>`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =
​
Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'yardım'
};