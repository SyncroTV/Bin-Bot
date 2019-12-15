const Discord = require("discord.js");
const package = require("../package.json");
const moment = require('moment');

module.exports = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor(0x00ff00)
    .setTitle(`About ${client.user.username}!`)
    .setFooter(`v${package.version}`)
    .addField("👥 Tag", client.user.tag, true)
    .addField("🆔 User ID", client.user.id, true)
    .addField("💻 Platform", process.platform, true)
    .addField("💎 Servers", client.guilds.size, true)
    .addField("🔢 Unique Users", client.users.size, true)
    .addField(`Uptime`, `${moment.duration(client.uptime).humanize()}`, true)
    .addField("Bot Version",`v${package.version}`)
    .addField("Created By","some retards")
    .addField("Edited by", "your name here")
    message.channel.send(embed);
}
