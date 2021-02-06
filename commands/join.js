const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    let con = message.member.voice.channel
    if (!con) return message.channel.send("Eu não sei em qual canal você esta")
const entrar = await message.member.voice.channel.join('')
message.channel.send("Estou conectado no canal voz")
}