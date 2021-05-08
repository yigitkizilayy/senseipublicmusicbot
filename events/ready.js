const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  client.on("ready", () => {
  console.log('Sensei Müzik Bot Giriş Yaptı!')
  client.user.setActivity(".yardım")
})
};