const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
       // "Destek sunucumuz saldırıya uğradı sunucumuza gelmek için g!desteksunucum yazabilirsiniz",
       // "Destek sunucumuz saldırıya uğradı sunucumuza gelmek için g!desteksunucum yazabilirsiniz",
        "💪 7/24 Aktif!",  
        "💡 !davet | İle Botumuzu ekleyin",
        "👨 2 bin kullanıcı",
        "🌍 81 Sunucuda Hizmet!",
        "!yardım 🔥 + !davet "
     Gelişmiş ready.js
client.user.setGame(`${prefix}yardım | ${client.guilds.size} sunucu`);
     
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/erenbaltaci_");
        }, 2 * 2500);
}