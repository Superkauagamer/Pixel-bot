const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.gifer.com/ZjWE.gif',
  'https://i.gifer.com/9TEp.gif',
  'https://i.gifer.com/W4S.gif',
  'https://i.gifer.com/84OP.gif',
  'https://i.gifer.com/8Va5.gif',
  'https://i.gifer.com/2qQQ.gif',
  'https://i.gifer.com/XXx.gif',
  'https://i.gifer.com/AjP.gif',
  'https://i.gifer.com/bAd.gif',
  'https://i.gifer.com/V04k.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Alone')
        .setColor('#000000')
        .setDescription(`${message.author} is alone`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('That hurts? I was wondering')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}