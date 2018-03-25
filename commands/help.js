const Discord = require("discord.js");
const package = require("../package.json");

module.exports = async(client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTitle("Bin-Bot Help")
  .setFooter(`[] = Optional <> = Required | v${package.version}`)
  .setColor(0x00ff00)
  .addField("help", "Brings up this help embed.")
  .addField("botinfo", "Gives you information about Bin-Bot.")
  .addField("profile [user]", "Gives you information about a user.")
  .addField("serverinfo", "Gives you information about the server.")
  .addField("ping", "Pings the bot.")
  .addField("invite", "gives you the invite for Bin-Bot.")
  .addField("Jeff", "Displays a hot jeff")
  .addField("eval <code>", "Evaluates code. **Maintainer Only**")
  message.author.send(embed);

  const embed1 = new Discord.RichEmbed()
  .setTitle("I have sent help your dms :mailbox_with_mail:")
  message.channel.send(embed1);


}
