const Discord = require('discord.js')
const {PREFIX} = require('../ayarlar.json')
module.exports = {
  name: "yardım",
  description: "yardım", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
  .setImage("https://cdn.discordapp.com/attachments/838192890898677763/838901040770318386/standard_1.gif")
                 
  .setDescription(` <a:hypeshiny:838451913724264500>Sensei Müzik \n \n <a:ok2:838449685697134592> Yardım Komutları \n \n <a:krmzyldz:838451914365730878> **.çal** : <şarkı-adı> Bir Şarkıyı Oynatır. \n \n <a:krmzyldz:838451914365730878> **k/geç** : Sıradaki şarkıyı atlar. \n  \n <a:krmzyldz:838451914365730878> **k/döngü** : Çalan şarkıyı sürekli tekrarlar. \n  \n  <a:krmzyldz:838451914365730878> **k/durdur** : Çalan şarkıyı durdurur. \n \n  <a:krmzyldz:838451914365730878> **k/devam** : Duran şarkıyı devam ettirir. \n \n  <a:krmzyldz:838451914365730878> **k/sıra** : Şarkı sırasını gösterir. \n \n  <a:krmzyldz:838451914365730878> **k/ad** : Oynatılan şarkının adını söyler.\n \n \n  <a:resimemoji:838880224913260625> Kızılay Müzik her gün gelişiyor.`)
                       .setColor("ff0a0a")
                      )
    
}
} 
