const Discord = require('discord.js');
/*module.exports = {
	name: 'Warn',
	description: 'Warn a member',
    execute(message, args) {*/
        exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("MENAGE_MESSAGES")) return messagem.reply ("você não tem permissão suficiente");
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user)
        return message.reply('Não se esqueça de mencionar um usuario')

    let causa = args.slice(1).join(" ");
    if (causa === null) {
        causa = "não definida"
    }
    if (user.bot)
       return message.channel.send("Você não pode alertar um bot")
    if (user.id === message.guild.owner.id)
       return message.channel.send("Você não pode avisar o dono do servidor")
    if (message.author.id === user.id) 
       return message.channel.send("Porque você esta tentando se avisar?")
    let aviso = new Discord.MessageEmbed()
    .setTitle(`**Server: ${message.guild.name}**`)
    .setColor('#FF0000')
    .addField(`Alertado por`, message.author)
    .addField(`Motivo:`, causa)
    .setTimestamp()
    .setFooter(`Você foi avisado por ${message.author.tag}`)
    let aviso2 = new Discord.MessageEmbed()
    .setTitle("warn de usuario")
    .setColor("#00FF00")
    .addField(`Alertado por:`, message.author.tag)
    .addField(`Motivo:`, causa)
    .setFooter(`O alerta foi enviado ao usuario`)
    user.send(aviso)
    message.channel.send(aviso2)
};