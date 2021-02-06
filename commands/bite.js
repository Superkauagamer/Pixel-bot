const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.gifer.com/NCMI.gif',
  'https://i.gifer.com/5Hj4.gif',
  'https://i.gifer.com/np4.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('remember to mention a valid user to bite');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('bitten')
        .setColor('#000000')
        .setDescription(`${message.author} bit ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('I thought you bit to eat and not to play, I still have to understand you')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}