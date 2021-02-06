const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.gifer.com/KJ42.gif',
  'https://i.gifer.com/7MOk.gif',
  'https://i.gifer.com/GJor.gif',
  'https://i.gifer.com/3dRv.gif',
  'https://i.gifer.com/7MP2.gif'
  ];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('remember to mention a valid user to pat');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Pat')
        .setColor('#000000')
        .setDescription(`${message.author} patted ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('a pat from a friend (or not)')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}