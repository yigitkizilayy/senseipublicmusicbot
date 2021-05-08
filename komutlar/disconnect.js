const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyBReeHA336dEk_nVViv4VoDwtPyGtPZffU');

exports.run = async (client, message, args) => {
    const queue = client.queue;
    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const err1 = new RichEmbed()
    .setColor("#0f0f0f")
    .setDescription(`<a:sarialarm:840402393594462248> **Bu komutu kullanmak için bir ses kanalında olmalısın.**`)  
    if (!voiceChannel) return message.channel.send(err1);
    const err2 = new RichEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:x: There's no song playing right now.`)
    if (!serverQueue) return message.channel.send(err2);
    serverQueue.songs = [];
    const songEnd = new RichEmbed()
    .setColor("#0f0f0f")
    .setDescription(`<a:sarialarm:840402393594462248> Ses odasından ayrıldım.`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songEnd);
};

exports.conf = {
    enabled: true,
    aliases: ['dc'],
    permLevel: 0
};

exports.help = {
    name: 'ayrıl',
    description: 'Botu Kanaldan Çıkartır ve Şarkıyı Kapatır.',
    usage: 'ayrıl'
};