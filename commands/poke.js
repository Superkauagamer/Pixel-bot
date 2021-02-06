const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.gifer.com/S00v.gif',
  'https://i.gifer.com/Lqge.gif',
  'https://i.gifer.com/Rd88.gif',
  'https://i.gifer.com/S013.gif',
  'https://i.gifer.com/bun.gif',
  'https://i.gifer.com/JTSO.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('remember to mention a valid user to poke');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Poke')
        .setColor('#000000')
        .setDescription(`${message.author} just poked ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('that hurts? I was wondering')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}