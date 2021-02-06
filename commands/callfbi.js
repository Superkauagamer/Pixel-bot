const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.gifer.com/7l0z.gif',
  'https://i.gifer.com/8MsV.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Não se esqueça do endereço (usúario)');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Open up')
        .setColor('#000000')
        .setDescription(`${message.author} called the fbi to ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Open the door')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}