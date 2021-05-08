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
        
    const a = new RichEmbed()
    .setColor("#7106aa")
    .setDescription(`<a:sarialarm:840402393594462248> Bu komutu kullanabilmek için bir ses kanalında olmalısın!**`)  
  if (!voiceChannel) return message.channel.send(a)

  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
        const asjdhsaasjdhaadssad = new RichEmbed()
    .setColor("#7106aa")
    .setDescription(`Paused :pause_button:`)
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    const b = new RichEmbed()
    .setColor("#7106aa")
    .setDescription(`<a:sarialarm:840402393594462248> Şu an bir şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(b);

};

exports.conf = {
    enabled: true,
    aliases: ['s'],
    permLevel: 0
};

exports.help = {
    name: 'durdur',
    description: 'Çalan şarkıyı duraklatır.',
    usage: 'durdur'
};