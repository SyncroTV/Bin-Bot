const discord = require('discord.js');
const package = require("../package.json");

module.exports = async(client, message, args) => {
  const embed = new discord.RichEmbed()
  .setTitle("Bin-Bot invite")
  .addField("Invite:", "https://discordapp.com/api/oauth2/authorize?client_id=416262268263596043&permissions=8&scope=bot")
  message.channel.send(embed);
}
