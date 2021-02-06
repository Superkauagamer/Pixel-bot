const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const { prefix, token } = require('./config.json'); //Pegando o prefixo do bot para respostas de comandos

client.on("ready", () => {


    let activities = [
        `Use ${prefix}help for help, what else would it do?`,
        `${client.guilds.cache.size} servidores!`,
        `${client.channels.cache.size} channels!`,
        `${client.users.cache.size} users!`
    ],
        i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
    }), 1000 * 60);
    client.user
        .setStatus("dnd")
        .catch(console.error);
    console.log("Estou Online!")
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
        console.error('Erro:' + err);
    }
});

client.login(token);