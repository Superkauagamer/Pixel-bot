const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://i.gifer.com/8Sbz.gif',
  'https://i.gifer.com/2uEt.gif',
  'https://i.gifer.com/8Uc1.gif',
  'https://i.gifer.com/PCUi.gif',
  'https://i.gifer.com/i0I.gif',
  'https://i.gifer.com/EX8g.gif',
  'https://i.gifer.com/XJis.gif',
  'https://i.gifer.com/Jr4.gif',
  'https://i.gifer.com/QPB7.gif',
  'https://i.gifer.com/HOgH.gif',
  'https://i.gifer.com/9p3w.gif',
  'https://i.gifer.com/BuMm.gif',
  'https://i.gifer.com/FChS.gif',
  'https://i.gifer.com/36KV.gif',
  'https://i.gifer.com/32Jm.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('remember to mention a valid user to kiss');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} kissed ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('You like this?')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}