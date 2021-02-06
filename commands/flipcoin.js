const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    var coin = [
        "cara",
        "coroa"
    ]
    var rand = coin[Math.floor(Math.random() * coin.length)];

    message.channel.send(`Você jogou uma moeda e deu ${rand}`)
}