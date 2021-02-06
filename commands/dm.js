const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.author.id === '<468468186791149569>') return message.channel.send('apenas o meu dono pode fazer isso')
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
let men = args.join(' ');
  message.delete().catch(O_o => {});
if (!user)
    return message.channel.send('Não se esqueça de mencionar o usuario para receber a menssagem');
user.send(args.slice(1).join(" "))
message.channel.send("O usuario recebeu a dm")
  }