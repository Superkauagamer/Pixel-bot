const Discord = require('discord.js');

/*module.exports = {
	name: 'Warn',
	description: 'Warn a member',
    execute(message, args) {*/
module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MENAGE_MESSAGES")) return messagem.reply ("você não tem permissão suficiente");

  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};