const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db')
const Jimp = require('jimp');
const snekfetch = require('snekfetch');
require('./util/eventLoader')(client);
client.queue = new Map()
let hereEngel = JSON.parse(fs.readFileSync("././jsonlar/hereEngelle.json", "utf8"));

let owner = "419840467929137168" //Kendi ıdnizi ekleyin


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
      console.log(`az önce panelime birisi tıkladı -_-`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);




client.on("message", msg => {
  if (!msg.guild) return;
  if (!hereEngel[msg.guild.id]) return;
  if (hereEngel[msg.guild.id].hereEngel === 'kapali') return;
    if (hereEngel[msg.guild.id].hereEngel=== 'acik') {
      const here = ["@here", "@everyone"];
  if (here.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete());
        var e = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Everyone ve Here Engeli!")
        .setDescription(`Bu sunucuda Everyone ve Here yasak!`)
        msg.channel.send(e).then(message => message.delete(5000));
    }
}
    }
});


client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let embed = new Discord.RichEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Verildi `)
.setColor("GREEN")
    .setFooter("Harmony ", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: :white_check_mark: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)
});



/*client.on("guildMemberAdd", async member => {
         let anan = member.user.avatarURL || member.user.defaultAvatarURL
    let memberChannel = await db.fetch(`memberChannel_${member.guild.id}`)
    if (!member.guild.channels.get(memberChannel)) return console.log('memberChannel')
        let username = member.user.username;
        if (member.guild.channels.get(memberChannel) === undefined || member.guild.channels.get(memberChannel) === null) return;
        if (member.guild.channels.get(memberChannel).type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png");
            const userimg = await Jimp.read(anan);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    member.guild.channels.get(memberChannel).send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })
client.on("guildMemberRemove", async member => {
         let anan = member.user.avatarURL || member.user.defaultAvatarURL
    let memberChannel = await db.fetch(`memberChannel_${member.guild.id}`)
    if (!member.guild.channels.get(memberChannel)) return console.log('memberChannel')
        let username = member.user.username;
        if (member.guild.channels.get(memberChannel) === undefined || member.guild.channels.get(memberChannel) === null) return;
        if (member.guild.channels.get(memberChannel).type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png");
            const userimg = await Jimp.read(anan);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    member.guild.channels.get(memberChannel).send(new Discord.Attachment("./img/"+ member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })
*/


  
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
client.on("guildMemberAdd", async member => {
const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/gc.json", "utf8"));
  
  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal)
    if (!hgK) return;
        let username = member.user.username;
   
            const bg = await Jimp.read("https://i.postimg.cc/LXrHDVJC/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    hgK.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        let hgm = JSON.parse(fs.readFileSync("./jsonlar/hgm.json", "utf8"));
    const hgmK = member.guild.channels.get(hgm[member.guild.id].gkanal)
    var kullanici = member.tag
    var sunucu = member.guild.name
    hgmK.send(`${gc[member.guild.id].mesaj}`)
    })
client.on("guildMemberRemove", async member => {
const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/gc.json", "utf8"));
    const hgK = member.guild.channels.get(gc[member.guild.id].gkanal)
    if (!hgK) return;
        let username = member.user.username;
         
                        const bg = await Jimp.read("https://i.postimg.cc/zGJqxvfr/guild-Remove.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    hgK.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        
    })

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


var prefix = ayarlar.prefix;


client.on("message", message => {
  const dmchannel = client.channels.find("name", "dm");
  if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
      dmchannel.sendMessage("", {embed: {
              color: 3447003,
              title: `DM Atan Kişi: **${message.author.tag}**`,
              description: `Dm Mesajı: **${message.content}**`
            }})
  }
  if (message.channel.bot) return;
});


client.on("ready", () => {
  client.user.setActivity(prefix + "yardım ") 
  console.log("Bağlandım!")   
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};




/*const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('guildMemberAdd', async member => {
  let davetChannel = await db.fetch(`davetk_${member.guild.id}`)
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    
    if (!member.guild.channels.get(davetChannel)) return console.log(`memberLogChannel`)
    else member.guild.channels.get(davetChannel).send(`${member.user.tag} Sunucuya Katıldı. Hoşgeldin. \n<@${inviter.id}> Tarafından Davet Edildi! Toplam ${invite.uses} Kişi Davet Etmiş`)
 });*/



//dene

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  if (message.author.id === ayarlar.zpeed) permlvl = 4;

  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});




client.login(process.env.TOKEN);
//XiR
