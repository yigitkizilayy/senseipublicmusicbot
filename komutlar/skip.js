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
        
    const err0 = new RichEmbed()
      .setColor("#7106aa")
      .setDescription(`<a:sarialarm:840402393594462248> **Bu komutu kullanabilmek için bir ses kanalında olmalısın!**`) 
    if (!voiceChannel) return message.channel.send(err0);
    const err05 = new RichEmbed()
    .setColor("#7106aa")
    .setDescription(`<a:alarm:840402399398723594> Şu an şarkı çalmıyor.`)
    if (!serverQueue) return message.channel.send(err05);
    const songSkip = new RichEmbed()
    .setColor("#7106aa")
    .setDescription(`The song was successfully skiped!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songSkip)
if(!message.member.hasPermission("KİCK_MEMBERS")) return message.reply("  **Bu komut DJ rolü yada Mesajları Yönet yetkisine sahip olanlar tarafından kullanılabilir" );
};

exports.conf = {
    enabled: true,
    aliases: ['s'],
    permLevel: 0
};

exports.help = {
    name: 'geç',
    description: 'Sıradaki şarkıya geçer. Sırada şarkı yoksa şarkıyı kapatır.',
    usage: 'geç'
};