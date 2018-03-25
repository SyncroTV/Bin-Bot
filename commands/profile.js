const Discord = require("discord.js");
const package = require("../package.json");

module.exports = async(client, message, args) => {
    const embed = new Discord.RichEmbed();

    if (message.mentions.users.first()) {
        let user = message.mentions.users.first();
        embed.setAuthor(client.user.username, client.user.avatarURL)
        .setDescription(`Here is some information I found for **${user.username}**`)
        .setColor(0x00ff00)
        .setThumbnail(user.avatarURL)
		.addField(":bust_in_silhouette: Username", `${user.username}`)
		.addField(":hash: Discriminator", `${user.discriminator}`)
		.addField(":id: ID", `${user.id}`)
		.addField(":clock1: Time Created", `${user.createdAt}`)
		.addField(":robot: Bot?", `${user.bot}`)
        message.channel.send(embed);
    } else {
        embed.setAuthor(client.user.username, client.user.avatarURL)
        .setDescription(`Here is some information I found for **${message.author.username}**`)
        .setColor(0x00ff00)
        .setThumbnail(message.author.avatarURL)
		.addField(":bust_in_silhouette: Username", `${message.author.username}`)
		.addField(":hash: Discriminator", `${message.author.discriminator}`)
		.addField(":id: ID", `${message.author.id}`)
		.addField(":clock1: Time Created", `${message.author.createdAt}`)
		.addField(":robot: Bot?", `${message.author.bot}`)
        message.channel.send(embed);
    }
}