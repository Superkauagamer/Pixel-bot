const Discord = require('discord.js');

exports.run = async (client,message, args) => {
    if (!message.member.permissions.has("BAN_MENBERS")) return messagem.reply ("você não tem permissão suficiente");
let id = args[0]
if (!id) return message.channel.send("Id invalido")
let causa = args.join(" ").slice(22);
if (!causa) {
    causa = "Aproveite e evite ser banido de novo"
}
let unbanm = new Discord.MessageEmbed()
.setTitle(`Unban ${message.guild.name}`)
.setColor("#00FF00")
.addField(`Você foi desbanido por:`, message.author)
.addField(`Menssagem`, causa)
.addField(`PixelBot`, `Desbanido`)
.setFooter(`desbanido por ${message.author.tag}`)
let unbanm2 = new Discord.MessageEmbed()
.setTitle(`Unban ${message.guild.name}`)
.setColor("#00FF00")
.addField('O usuario foi desbanido por:', message.author)
.addField('Menssagem', causa)
.addField('Pixelbot', 'Espero que ele não cometa o mesmo erro')
message.guild.members.unban(id, {unbanm});
message.channel.send(unbanm2)
}