const Discord = require("discord.js");
const package = require("../package.json");

module.exports = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle("Jeff")
    .setDescription("My name jeff")
    .setImage("https://media1.tenor.com/images/c9167c5989b84ea6f2d62b516978d29f/tenor.gif?itemid=7542781")
    .setColor("#008451")
    message.channel.send(embed);

}
