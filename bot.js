const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log(`[info] Logged into Discord with username ${client.user.tag}.`);
    // So you put it in here
    client.user.setActivity("!help // 0.1.1" );
})

client.on("message", async message => {
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
    const client = message.client;
    const args = message.content.split(" ");
    const command = args.shift().slice(config.prefix.length);
    let cmdFile = require(`./commands/${command}`);
    console.log(`[info] ${message.author.tag} has executed the ${command} command in ${message.guild.name}`)
    if (cmdFile) {
        cmdFile(client, message, args);
    }
})

client.login(config.token);
