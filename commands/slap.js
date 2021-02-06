const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.gifer.com/1SgY.gif',
  'https://i.gifer.com/8Z0s.gif',
  'https://i.gifer.com/G9IM.gif',
  'https://i.gifer.com/2Vj5.gif',
  'https://i.gifer.com/ApIq.gif',
  'https://i.gifer.com/Rk5D.gif',
  'https://i.gifer.com/B2Sm.gif',
  'https://i.gifer.com/cCX.gif',
  'https://i.gifer.com/2MrF.gif',
  'https://i.gifer.com/DjuN.gif',
  'https://i.gifer.com/2mr6.gif',
  'https://i.gifer.com/K06.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('remember to mention a valid user for slap');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Slap')
        .setColor('#000000')
        .setDescription(`${message.author} slapped ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('slap of friend (or not)')
        .setAuthor(message.author.tag, avatar);
   message.channel.send(embed);
}