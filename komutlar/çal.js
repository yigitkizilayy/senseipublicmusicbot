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

    const embed = new RichEmbed()
    .setColor("#7106aa")
    .setTitle("Yanlış Kullanım")
    .setDescription(".çal <şarkı adı veya linki>")
    if (!args[0]) return message.channel.send(embed);
        
    const voiceChannelAdd = new RichEmbed()
    .setColor("#7106aa")
    .setDescription(`<a:sarialarm:840402393594462248> **Bir ses odasında bulunmalısın.**`)
    if (!voiceChannel) return message.channel.send(voiceChannelAdd);

    var permissions = voiceChannel.permissionsFor(client.user);
    if (!permissions.has('CONNECT')) {
      const warningErr = new RichEmbed()
      .setColor("#7106aa")
      .setDescription(`<a:sarialarm:840402393594462248> **Ses odasına katılmaya yetkim yok.**`)
      return message.channel.send(warningErr);
    }
    if (!permissions.has('SPEAK')) {
      const musicErr = new RichEmbed()
      .setColor("#7106aa")
      .setDescription(`<a:sarialarm:840402393594462248> Mikrofonum kapalı olduğu için şarkıyı oynatamıyorum.`)
      return message.channel.send(musicErr);
    }
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message.message, voiceChannel, true);
      }
      const PlayingListAdd = new RichEmbed()
      .setColor("#7106aa")
      .setDescription(`[${playlist.title}](https://www.youtube.com/watch?v=${playlist.id}) sıraya eklendi!`)
      return message.channel.send(PlayingListAdd);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
      try {
          var videos = await youtube.searchVideos(searchString, 10);
          
          var r = 1
        
          var video = await youtube.getVideoByID(videos[r - 1].id);
        } catch (err) {
          console.error(err);
          const songNope = new RichEmbed()
          .setColor("#7106aa")
          .setDescription(`<a:sarialarm:840402393594462248> Öyle bir şarkı bulamadım!`) 
          return message.channel.send(songNope);
        }
      }
      return handleVideo(video, message, voiceChannel);
    }

    async function handleVideo(video, message, voiceChannel, playlist = false) {
        var serverQueue = queue.get(message.guild.id);
        
        var song = {
          id: video.id,
          title: video.title,
          durationh: video.duration.hours,
          durationm: video.duration.minutes,
          durations: video.duration.seconds,
          url: `https://www.youtube.com/watch?v=${video.id}`,
          thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
          requester: message.author.tag,
        };
        if (!serverQueue) {
          var queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 3,
            playing: true
          };
          queue.set(message.guild.id, queueConstruct);
      
          queueConstruct.songs.push(song);
      
          try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
          } catch (error) {
            console.error(`<a:sarialarm:840402393594462248> Ses kanalına giremedim.`);
            queue.delete(message.guild.id);
            return message.channel.send(`<a:sarialarm:840402393594462248> Ses kanalına giremedim.`);
          }
        } else {
          serverQueue.songs.push(song);
          
          if (playlist) return undefined;
      
          let y = ''
        if (song.durationh === 0) {
            y = `${song.durationm || 0}:${song.durations || 0}`
        } else {
            y = `${song.durationh || 0}:${song.durationm || 0}:${song.durations || 0}`
        }
          
          const songListBed = new RichEmbed()
          .setColor("7106aa")
          .setDescription(`[${song.title}](https://www.youtube.com/watch?v=${song.id}) sıraya eklendi`)
          .addField("Şarkı Süresi:", `${y}`, true)
          .addField("Şarkıyı Kim İstedi:", `${song.requester}`, true)
          .setThumbnail(song.thumbnail)
          return message.channel.send(songListBed);
        }
        return undefined;
      }
        function play(guild, song) {
        var serverQueue = queue.get(guild.id);
      
        if (!song) {
          serverQueue.voiceChannel.leave();
          voiceChannel.leave();
          queue.delete(guild.id);
          return;
        }
      
        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
          .on('end', reason => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
          })
          .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        
        let y = ''
        if (song.durationh === 0) {
            y = `${song.durationm || 0}:${song.durations || 0}`
        } else {
            y = `${song.durationh || 0}:${song.durationm || 0}:${song.durations || 0}`
        }

        const playingBed = new RichEmbed()
        .setColor("#7106aa")
        .setAuthor(`Şimdi Çalıyor`, message.author.avatarURL)
        .setDescription(`[${song.title}](${song.url})`)
        .addField("Şarkı Süresi:", `${y}`, true)
        .addField("Şarkıyı Kim Açtı:", `${song.requester}`, true)
        .setThumbnail(song.thumbnail)
        serverQueue.textChannel.send(playingBed);
      }  
};

exports.conf = {
    enabled: true,
    aliases: ['p'],
    permLevel: 0
};

exports.help = {
    name: 'çal',
    description: 'Belirttiğiniz şarkıyı bulunduğunuz sesli kanalda çalar/oynatır.',
    usage: 'çal [şarkı adı]'
};