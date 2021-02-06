const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("KICK_MENBERS")) return messagem.reply ("você não tem permissão suficiente");
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) return message.channel.send("Não se esqueça de mencionar o usuario")
    let causa = args.join(" ").slice(22);
    if (!causa) {
        causa = "Não definida"
    }
    let kickm = new Discord.MessageEmbed()
    .setTitle(`Server: ${message.guild.name}`)
    .setColor(`#FF0000`)
    .addField(`kicked by:`, message.author)
    .addField(`Motivo:`, causa)
    .addField(`PixelBot`, `Não fique triste, você pode fazer outras coisas enquanto espera`)
    .setFooter(`Kicked in: ${message.guild.name}`)
    let kickm2 = new Discord.MessageEmbed()
    .setTitle(`Server: ${message.guild.name}`)
    .setColor(`#00FF00`)
    .addField(`Kicked by:`, message.author)
    .addField(`Motivo:`, causa)
    .addField(`PixelBot`,`Trabalho concluido`)
    .setFooter(`Server: ${message.guild.name}`)
    message.guild.members.kick(user, {kickm})
    message.channel.send(kickm2)
    message.channel.send(kickm)
}