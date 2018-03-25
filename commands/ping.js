const Discord = require("discord.js");
const package = require("../package.json");

module.exports = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle("🏓 Pong!")
    .setColor(0x00ff00)
    .setFooter(`This message took me ${Math.floor(client.ping)}ms! | v${package.version}`)
    message.channel.send(embed);
}

// Ping command by Hayden