const Discord = require("discord.js");

module.exports = {
  commands: ['clear', 'clean'],
  expectedArgs: '<num1>',
  permissionError: 'You need admin permissions to run this command',
  minArgs: 1,
  maxArgs: 1,
  callback: (message, arguments, text) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "you are weak, you lack permission to `Manage messages` to use this command"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99 )
    return message.reply(
      "provide a number of up to ** 99 messages ** to be deleted"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} messages have been deleted!!**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`the messages could not be deleted because: ${error}`)
    )
  },

    permissions: 'ADMINISTRATOR',
     requiredRoles: []
    }