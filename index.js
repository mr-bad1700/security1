const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
/////////////////////////////////////////////////////////
const { Client, MessageEmbed } = require("discord.js");
var { Util, RichEmbed } = require("discord.js"); 
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "m/";
const cooldown = new Set();
const cdtime = 7;
client.login("ODEzNTYyNjQyMzU4NzMwNzYz.YDRHQQ.V_dEJ_eyqONTXWvV18kP7KOeQP8");
client.on("ready", () => {
  console.log(`${client.user.tag}`);
});

// anti bot 








  

// anime
const cheerio = require('cheerio');

client.on("ready", () => {
  console.log("I am ready to give wallpapers!!")
  client.user.setActivity("Serving 1000+ Anime Wallpapers")
})

client.on("message", async message => {
  if (message.content === "m/anime") {
    let random = Math.floor(Math.random() * 107)
    let text = await fetch(`https://hdqwalls.com/category/anime-wallpapers/page/${random}`, { method: "GET" })
    text = await text.text()
    let $ = cheerio.load(text)
    let images = []

    $('img[class="thumbnail img-responsive custom_width"]').each(function(i, elem) {
      images.push($(this).attr('src'));
    });



    let limit = images.length
    let pg = 0;
    let embed = new discord.MessageEmbed()
      .setColor("#000001")
      .setImage(images[0].replace("/thumb", ""))

    const msg = await message.channel.send(embed);

    msg.react("⬅️");
    await msg.react("➡️");

    const collector = msg.createReactionCollector(
      // only collect left and right arrow reactions from the message author
      (reaction, user) =>
        ["⬅️", "➡️"].includes(reaction.emoji.name) &&
        user.id === message.author.id,
      // time out after a minute
      { time: 120000 }
    );

    collector.on("collect", reaction => {

      reaction.users.remove(message.author).then(async () => {
        if (reaction.emoji.name === "➡️") {


          if (!images[pg + 1]) {
            pg = pg
          } else {
            pg = pg + 1
          }
          embed = new discord.MessageEmbed()
            .setColor("#000001")
            .setImage(images[pg].replace("/thumb", ""))
          msg.edit(embed)
          msg.react("⬅️");
          await msg.react("➡️");
        }

        else if (reaction.emoji.name === "⬅️") {


          if (!images[pg - 1]) {

            pg = pg
          } else {
            pg = pg - 1
          }

          embed = new discord.MessageEmbed()
            .setColor("#000001")
            .setImage(images[pg].replace("/thumb", ""))
          msg.edit(embed)

          msg.react("⬅️");
          await msg.react("➡️");
        }
      })

    })

      collector.on('end', collected => {
      if (msg) {
        msg.reactions.removeAll()
      }
    });

  }
})


  
  





//=================================[ serverinfo ]===========================//

  
 client.on("message", async message  => {
if(message.content.startsWith(prefix+"server info")) {

  if(message.author.bot) return;
if(!message.channel.guild) return;

let args = message.content.split(" ").slice(1);

const os = require('os')

        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('BLACK')
            .setTitle(`${message.guild.name} server Info`)
            .addFields(
                {
                    name: "__Owner__: ",
                    value: `${message.guild.owner}`,
                    inline: true
                },
                {
                    name: "__All Members__: ",
                    value: ` ${message.guild.memberCount} users`,
                    inline: true
                },
                {
                    name: "__Members Online__: ",
                    value: ` ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online`,
                    inline: true
                },
                {
                    name: "__All Bots__: ",
                    value: ` ${message.guild.members.cache.filter(m => m.user.bot).size} bots`,
                    inline: true
                },
                {
                    name: "__Creation Date__: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "__Roles Number__: ",
                    value: ` ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                {
                    name: `__Region__: `,
                    value: region,
                    inline: true
                },
                {
                    name: `__Verified__: `,
                    value: message.guild.verified ? 'Server is verified' : `Not verified`,
                    inline: true
                },
                {
                    name: '__Boosters__: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? ` ${message.guild.premiumSubscriptionCount} Boosters` : ` no boosters Found`,
                    inline: true
                },
                {
                    name: "__Emojis__: ",
                    value: message.guild.emojis.cache.size >= 1 ? `All emojis ${message.guild.emojis.cache.size} !` : ' no emojis Found' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}

) 
  
  
  
  
  
client.on("message", message => {
  if (message.content.startsWith(prefix + "support")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`__[Join Server](https://discord.gg/Zhwg47uFun)__ *join to server bot*
__[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)__ *thank you for invite bot* `)
      .setTimestamp()
      .setFooter(`By: ${message.author.tag}`)
      .setAuthor(client.user.username)
      .setThumbnail(message.author.avatarURL)
      .setColor("BLACK");
    message.author.send(embed);
    message.react("✅");
  }
});
  
  
  
  
  
  
  
  
  client.on("ready", () => {
setInterval(() => {
  client.user.setActivity(
  `${prefix}help`,
  );
}, 2000);
})


client.on("warn", (info) => console.log(info));
client.on("error", console.error);

//////

client.on("message", message => {
  if (message.content === prefix + "help music") {
    let Dashboard = `
__Music Commands__
> play , clip , clips ,
> loop , lyrics , move ,
> np , pause , playlist ,
> queue , remove , search ,
> shuffle , skip  , skipto
> stop , uptime , volume .
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
    var SUPPORT = `https://discord.gg/Zhwg47uFun`;
    var EMBED = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(
        `${Dashboard}
  **[invite bot ](${addserver})** | **[ Server Suppurt](${SUPPORT})** `
      )
      .setImage("");
    message.channel.send(EMBED);
    message.react("🎧");
  }
});








client.on("message", message => {
  if (message.content === prefix + "help") {
    let Dashboard = `
__Help Commands__
> __help admin__  to viwe command admin
> __help public__  to viwe command all info
> __help music__ to see command music
> __help giveaway__ to viwe command giveaways
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
    var SUPPORT = `https://discord.gg/Zhwg47uFun`;
    var EMBED = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(
        `${Dashboard}
  **[invite bot ](${addserver})** | **[ Server Suppurt](${SUPPORT})** `
      )
      .setImage("");
    message.channel.send(EMBED);
  }
});







client.on("message", message => {
  if (message.content === prefix + "help admin") {
    let Dashboard = `
__Security Commands__ 
> ${prefix}anti kick - [Number]
> ${prefix}anti ban - [Number]
> ${prefix}anti roleC - [Number]
> ${prefix}anti roleD - [Number]
> ${prefix}anti channelC - [Number]
> ${prefix}anti channelD - [Number]
> ${prefix}anti bot - [on/off]
> ${prefix}setting
__Moderation Commands__ 
> lock , unlock , clear , ban , kick
> unban , mute , unmute , bans
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
    var SUPPORT = `https://discord.gg/Zhwg47uFun`;
    var EMBED = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setColor(color)
      .setDescription(
        `${Dashboard}
  **[invite bot ](${addserver})** | **[ Server Suppurt](${SUPPORT})** `
      )
      .setImage("");
    message.channel.send(EMBED);
    message.react("👮🏻");
  }
});


client.on("message", message => {
  if (message.content === prefix + "help public") {
    let Dashboard = `
__Public Commands__ 
> user info , 
> server info , 
> ping , 
> bot info
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
    var SUPPORT = `https://discord.gg/Zhwg47uFun`;
    var EMBED = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(
        `${Dashboard}
  **[invite bot ](${addserver})** | **[ Server Suppurt](${SUPPORT})** `
      )
      .setImage("");
    message.channel.send(EMBED);
    message.react("ℹ️");
  }
});


client.on("message", message => {
  if (message.content === prefix + "help giveaway") {
    let Dashboard = `
__Giveaway Commands__ 
> end <id-message>
> start 
> delete
> create <#channel-name>
__This is a little prefix__
> [ ${prefix} ]
`;
    var addserver = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
    var SUPPORT = `https://discord.gg/Zhwg47uFun`;
    var EMBED = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription(
        `${Dashboard}
  **[invite bot ](${addserver})** | **[ Server Suppurt](${SUPPORT})** `
      )
      .setImage("");
    message.channel.send(EMBED);
    message.react("🎉");
  }
});

///////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let invite = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTitle("" + 
                "click here | thank you for invite me ⚡" + `${client.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
      );
    message.author.send(invite);
    message.react("✨");
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(
        "**Sorry , But You Dont Have `MANAGE_MESSAGE` Permission **"
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    const lock = new Discord.MessageEmbed()
      .setTitle("" + "Click Here To Add : " + `${client.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
      )
      .setColor(color)
      .setDescription(
                      `Locked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ${ghallatw}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(lock);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send("Sorry This Command Only For Servers.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(
        "**Sorry , But You Dont Have `MANAGE_MESSAGE` Permission **"
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setTitle("" + "Click Here To Add : " + `${client.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`
      )
      .setColor(color)
      .setDescription(
         `UnLocked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ${rastw}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});

//////

const rast = "";
const rastw = "";
const ghallat = "";
const ghallatw = "";
const logosec = "";
const warn = "";
const color = "#000001";

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2,
      time: 30
    }
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.ownerID) 
    return message.channel.send(
        "**  Ownership can use this command. **"
      );
    if (message.content.startsWith(prefix + "anti ban")) {
      
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].kickLimits} **`
      );
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].roleDelLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].roleCrLimits} **`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].chaDelLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].chaCrLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(` | Please wait for 10 second`)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }

      cooldown.add(message.author.id);

      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `**${rast}  Changed To : ${config[message.guild.id].time} **`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Role\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("ban member");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("member kick");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 2,
        chaDelLimit: 2,
        roleDelLimit: 2,
        kickLimits: 2,
        chaCrLimit: 2,
        roleCrLimits: 2
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("kick member");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

//////
const antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'))
  client.on('message', message => {
    if(message.content.startsWith(prefix + "anti bot on")){
          if(!message.channel.guild) return;
        if(message.member.id !== message.guild.ownerID) return message.channel.send('Only Ownership can use this command')
  antibots[message.guild.id] = {
  onoff: 'On',
  }
  let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Done Check The Anti bots is on**") 
      .addField("Server", `${message.guild.name}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("#000001")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send(embed);
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
 
          })
  client.on('message', message => {
    if(message.content.startsWith(prefix + "anti bot off")) {
          if(!message.channel.guild) return;
           if(message.member.id !== message.guild.ownerID)return;
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Done Check The Anti bots is off**") 
      .addField("Server", `${message.guild.name}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("#000001")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send(embed);
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
 
          })
 
  client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.ban("**antibots is one!!**")
  })
 
  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
  .catch(err => {
  console.error(err);
  });
 
  })






client.on("message", message => {
  if (message.content === prefix + "settings") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("ADMINISTRATOR"))
      if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const black = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL()).setDescription(`AntiBan
Enabled: 
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled: 
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannelD
Enabled: 
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiChannelC
Enabled: 
Maximum Create : ${config[message.guild.id].chaCrLimit}
-
AntiRoleD
Enabled: 
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiRoleC
Enabled: 
Maximum Create : ${config[message.guild.id].roleCrLimits}
-
AntiTime
Enabled: 
Maximum Time : ${config[message.guild.id].time}

`);

    message.channel.send(black);
  }
});

//=================================[ ban & unban]==================================//

client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  let cmd = messageArray[0];
  if (cmd === prefix + "ban") {
    let toBan =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.reply("I need ``BAN_MEMBERS`` permission ");
    const reason = args[1] || "there was no reason";
    toBan.ban({
      reason: reason
    });
    message.channel.send(
      `${toBan} banned from the server! \nReason: ${reason}`
    );
  }
  if (cmd === prefix + "unban") {
    let toBan = await client.users.fetch(args[0]);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.reply("I need ``BAN_MEMBERS`` permission ");
    message.guild.members.unban(toBan);
    message.channel.send(`${toBan} has been unbanned from the server `);
  }
});
/////

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send("Unban all members");
    }
    if (!args) return message.channel.send("Please Type the member ID / all");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`🛬 Unban this member ${m.username}`);
      })
      .catch(stry => {
        message.channel.send(
          `**❓ - I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});

//=================================[ mute ]=================================//

client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission MUTE_MEBMERS");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission MUTE_MEBMERS");
    if (!user) return message.channel.send(`${prefix}mute <@mention Or ID>`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#808080",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//=================================[ unmute ]===============================//

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission MUTE_MEBMERS");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission MUTE_MEBMERS");
    if (!user) return message.channel.send(`${prefix}unmute <@mention Or ID>`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`removed mute from ${user.username}!`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});



//=================================[ userinfo ]=============================//

client.on("message", prof => {
  if (prof.content.startsWith(prefix + "user info")) {
    if (cooldown.has(prof.author.id)) {
      return prof.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(prof.author.id);

    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setThumbnail(prof.author.avatarURL())
      .setColor("BLACK")
      .setTitle("Your Info User.")
      .addField("**Your Name**", `<@${prof.author.id}>`)
      .addField("**Your ID**", `${prof.author.id}`)
      .addField(
        "**Joined Server At**",
        moment(prof.joinedAt).format("D/M/YYYY h:mm a"),
        true
      )
      .addField("**Create User**", prof.author.createdAt.toLocaleString());
    prof.channel.send(professor);
  }
});

//=================================[ kick ]=================================//

client.on("message", message => {
  if (message.author.bot) return;
  var args = message.content.split(" ");
  if (args[0] === prefix + "kick") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("KICK_MEMBERS")) return;
    let user = message.mentions.members.first();
    if (!user) return;
    if (user.id === message.author.id)
      return message.reply("will you cant kick your self");
    if (!message.guild.member(user).bannable)
      return message.reply("i cant kick this user");
    var reason = args[2];
    if (!reason) reason = "No reason typed";
    user.kick();
    var embed = new Discord.MessageEmbed();
    message.channel.send(`${user.user.username} kicked ✈️`);
  }
});

//=================================[ bans ]=================================//

client.on("message", message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
    message.channel;
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`📋 Server Ban List : ${bans.size} `))
      .catch(console.error);
  }
});

//=================================[ ping ]=================================//

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.channel.send(`**Time taken: ${PinG} ms.**`);
    });
  }
});

//=================================[ botinfo ]==============================//

client.on("message", message => {
  if (message.content.startsWith(`${prefix}bot info`)) {
    const tnx = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(
        `https://cdn.discordapp.com/attachments/772758556848029727/802994883378806824/image0.jpg`
      )
      .setColor("BLACK")
      .setTitle(`Info about ${client.user.username}.`)
      .addField(
        "**My Ping**",
        `${Date.now() - message.createdTimestamp}` + "MS",
        true
      )
      .addField(
        "**Ram Usage**",
        `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,
        true
      )
      .addField("**Servers**", `[ ${client.guilds.cache.size} ]`, true)
      .addField("**Channels**", `[ ${client.channels.cache.size} ]`, true)
      .addField("**Users**", `[ ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} ]`, true)
      .addField("**My Name**", `[ ${client.user.tag} ]`, true)
      .addField("**My ID**", `[ ${client.user.id} ]`, true)
      .addField("**DiscordJS**", `[ ${Discord.version} ]`, true)
      .addField("**NodeJS**", `[ ${process.version} ]`, true)
      .addField("**Bot-Owners**", `<@596060641740193856>`, true)
      .addField("**My Prefix**", `[ ${prefix} ]`, true)
      .addField("**My Language**", `[ Java Script ]`, true)
      .setFooter(`client.user.username`);

    message.channel.send(tnx);
  }
});

//=================================[ warn ]=================================//

client.on("message", message => {
  if (message.content.startsWith(prefix + "warn")) {
    let args = message.content.split(" ").slice(1);
    if (!message.member.hasPermission("OWNERSHIP"))
      return message.reply("you dont have a Permission");

    var user = message.mentions.users.first();
    var rn = args.slice(1).join(" ");
    let em = new Discord.MessageEmbed()
      .setTitle("Error :")
      .setColor("808080")
      .setDescription(
        `
  **Usage:**
 ${prefix}warn (user) (reason)

  Ex :
  ${prefix}warn ${message.author} 
  ${prefix}warn ${message.author}  test
 
  `
      )
      .setAuthor(message.author.username, message.author.avatarURL());
    if (!user) return message.channel.send(em);

    let ffg = new Discord.MessageEmbed()
      .setColor("#080808")
      .setTimestamp()
      .setTitle("Warned!")
      .setDescription(
        `


 warned by  : ${message.author.username}
 reason     : ${rn}


  `
      )
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(``);
    message.channel.send(ffg);
    user.send(ffg);
    message.delete();
  }
});

//=================================[ clear ]================================//

client.on("message", async message => {
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "clear" || command == "clear") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(` | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    message.delete({ timeout: 0 });
    if (!message.channel.guild)
      return message.reply(`This Command For Servers Only`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`You don't have perms`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`I don't have perms`);

    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message.channel
        .send(
          `
i cant delete more than 100 messages 
`
        )
        .then(messages => messages.delete(5000));
    if (!messagecount) messagecount = "100";
    message.channel.messages
      .fetch({ limit: 100 })
      .then(messages => message.channel.bulkDelete(messagecount))
      .then(msgs => {
        message.channel
          .send(
            `
${msgs.size} messages cleared
`
          )
          .then(messages => messages.delete({ timeout: 5000 }));
      });
  }
});

//=================================[ kick & ban ]================================//

client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        " | You don't have Permissions do to this."
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send(" | Member not found!");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(` | You can't ${mode} the owner!`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        ` | You can't ${mode} people higher ranked than yourself!`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        ` | I can't ${mode} people who are higher ranked than me!`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(` | Specified user is not ${mode}able.`);
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `✅ ${mode == "ban" ? "Bann" : mode}ed __${user.user.tag}__ (ID: \`${
            user.user.id
          }\`)`
        )
      )
      .catch(console.error);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////


client.on('message',async message => {
  if(message.content.startsWith(prefix + "uptime")) { 
    let rozh= Math.floor(client.uptime / 86400000);
    let katzhmer= Math.floor(client.uptime / 3600000) % 24;
    let daqa= Math.floor(client.uptime / 60000) % 60;
    let chrka= Math.floor(client.uptime / 1000) % 60;
    
    return message.channel.send(`__Uptime:__\n${rozh}d ${katzhmer}h ${daqa}m ${chrka}s`);
  }
  
})



//======= msg tag ========\\
client.on('message', message => {
if (message.content.startsWith('<@793156769483718707>')) {
message.reply('Hi ✨')
}
});

client.on('message', message => {
  if (message.content.startsWith("<@793156769483718707>")) {
   let embed = new Discord.MessageEmbed()
     .setAuthor(client.user.username, client.user.avatarURL())
     .setColor(config.color)
     .setFooter(message.member.displayName, message.author.displayAvatarURL())
     .setDescription(`
     > Hello sir how to can i help you ?
     > Please type : __${prefix}help__ to see all commands
     
     > To report a bot send message for :
     > <@596060641740193856>
__Support__
     > __[Discord Server](https://discord.gg/Zhwg47uFun)__ - __[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)__`)
  message.channel.send(embed);
    }
});  
 
 
 



const leave = ["596060641740193856"] //owner id
 
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
 
 
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!leave.includes(message.author.id)) return;
 
 
  if (message.content === (prefix + "leave")) {
      
    message.guild.leave();    
      
    message.channel.send('```DONE```')
      
    } 
  
})  
}) 









