const Discord = require('discord.js');

/*module.exports = {
	name: 'Ban',
	description: 'Ban a member',
  execute(message, args) {*/
    exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("BAN_MENBERS")) return messagem.reply ("você não tem permissão suficiente");
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user)
        return message.reply('Não se esqueça de mencionar um usuario')
    let causa = args.join(" ").slice(22);
    if (!causa) {
        causa = "não definida"
    }
       if (user.id === 736654167812210729) return message.channel.send("Eu não posso me banir")
      if (!user.banable) return message.channel.send("Eu não posso banir usuarios superiores a mim, tente me colocar em um cargo superior")
    if (user.id === message.guild.owner.id)
       return message.channel.send("Você não pode banir o dono do servidor")
    if (message.author.id === user.id) 
       return message.channel.send("Porque você esta tentando se banir?")
       let banm = new Discord.MessageEmbed()
       .setTitle(`**Server: ${message.guild.name}**`)
       .setColor('#FF0000')
       .addField(`Banido por`, message.author)
       .addField(`Motivo:`, causa)
       .addField(`PixelBot`, `Fim da comunicação`)
       .setTimestamp()
       .setFooter(`Você foi banido do servido ${message.guild.name}`)
       let banm2 = new Discord.MessageEmbed()
       .setTitle(`Server: ${message.guild.name}`)
       .setColor(`#00FF00`)
       .addField(`Banido por:`, message.author)
       .addField(`Motivo:`,causa)
       .addField(`PixelBot`, `Banir?\n ->Yes\n No`)
       .setFooter(`Banido por ${message.author.tag}`)
       await message.guild.members.ban(user, { banm });
    message.channel.send(banm2)
};