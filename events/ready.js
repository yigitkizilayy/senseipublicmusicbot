//events/ready.js
const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("");
  client.user.setGame(`${prefix}yardım 》`+ client.guilds.size +` Sunucu | Tekrardan Hizmet Veriyoruz.`);
  console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
//XiR


//idle bölümünü dnd - online - dnd herhangi birisi ile değiştirirseniz botun çevrimiçi durumunu değiştirebilirsiniz..