const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.gifer.com/14pU.gif',
  'https://i.gifer.com/8RBa.gif',
  'https://i.gifer.com/AfZ2.gif',
  'https://i.gifer.com/285U.gif',
  'https://i.gifer.com/UDFe.gif',
  'https://i.gifer.com/8gdR.gif',
  'https://i.gifer.com/46MX.gif',
  'https://i.gifer.com/2HNu.gif',
  'https://i.gifer.com/9qBz.gif',
  'https://i.gifer.com/Vzt6.gif',
  'https://i.gifer.com/4N0z.gif',
  'https://i.gifer.com/A6zP.gif',
  'https://i.gifer.com/bD.gif',
  'https://i.gifer.com/ZJE8.gif',
  'https://i.gifer.com/GmUB.gif',
  'https://i.gifer.com/81LU.gif',
  'https://i.gifer.com/7m0v.gif',
  'https://i.gifer.com/F6NL.gif',
  'https://i.gifer.com/Z7zR.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('remember to mention a valid user to smile');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Smile')
        .setColor('#000000')
        .setDescription(`${message.author} smiled at ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Why are you happy? I wanted to be')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}