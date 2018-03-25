const Discord = require("discord.js");
const package = require("../package.json");

module.exports = async(client, message, args) => {
    const guild = message.guild;
    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor(0x00ff00)
    .setTitle(`Here is some information I found about **${guild.name}**`)
    .addField("👤 Owner", guild.owner, true)
    .addField("👥 Member Count", guild.members.size, true)
    .addField(":flag_gb: Region", guild.region, true)
    .addField("☀ Created On", guild.createdAt, true)
    .addField("🔒 Verification Level", message.guild.verificationLevel, true)
    message.channel.send(embed);
}