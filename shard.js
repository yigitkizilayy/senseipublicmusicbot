const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', {  //Ana dosyanızın adını buraya yazacaksınız.
    totalShards: 'auto',
    token: "NjI2Nzg1NTE4MzAyMDAzMjA4.XYzJiA.dS3pbuY76CrCQbdksPnxbDxBsts"// Botun tokenini buraya yazacaksınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID'sine sahip shard, başarıyla başlatıldı. Müzikler hazır, hehehe! `)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);