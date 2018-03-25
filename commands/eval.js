const Discord = require("discord.js");
const package = require("../package.json");
const config = require("../config.json");

module.exports = async(client, message, args) => {
  const embed1 = new Discord.RichEmbed();
  const embed2 = new Discord.RichEmbed();
  const embed3 = new Discord.RichEmbed();

  const errorembed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTitle("🚫 Access Denied")
  .setDescription(`${message.author.username}, you do not have permission to use this command.`)
  .setColor(0xff0000)
  .setFooter(`v${package.version}`)

  if (!config.maintainers.includes(message.author.id)) return message.channel.send(errorembed);

  try {
      const code = args.join(" ");
  let evaled = eval(code);

      if (typeof evaled !== "string")
       evaled = require("util").inspect(evaled);

       if(code.indexOf("client.token") >=0 || code.indexOf("config.token") >=0) {
         embed3.setColor("#ffa500")
          .setAuthor(client.user.username, client.user.avatarURL)
          .setTitle("🚫 Access Denied")
          .setDescription(`${message.author.username}, you aren't allowed to view the token by using eval.`)
          .setFooter(`v${package.version}`)
        message.channel.send({embed: embed3});
        return;
       }

       if(code.indexOf("config") >=0) {
       embed3.setColor("#ffa500")
        .setAuthor(client.user.username, client.user.avatarURL)
        .setTitle("🚫 Access Denied")
        .setDescription(`${message.author.username}, you aren't allowed to view the token by using eval.`)
        .setFooter(`v${package.version}`)
      message.channel.send({embed: embed3});
      return;
    }
       if (typeof evaled !== "string"){
         evaled = require("util").inspect(evaled);
       }

       embed1.setTitle("Eval Result")
       .setDescription("```" + evaled + "\n" + "```")
       .setColor("#32CD32")
       .setFooter(`v${package.version}`)
       message.channel.send({embed: embed1});
    } catch (err) {
      embed2.setTitle("Something went wrong!")
      .setDescription("```" + "\n" + err + "```")
      .setColor("#ff0000")
      .setFooter(`v${package.version}`)
      message.channel.send({embed: embed2});
  }
}
