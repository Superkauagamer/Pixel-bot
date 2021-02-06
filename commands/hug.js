const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var list = [
        'https://i.gifer.com/2QEa.gif',
        'https://i.gifer.com/WDf.gif',
        'https://i.gifer.com/GAMC.gif',
        'https://i.gifer.com/Zi8A.gif',
        'https://i.gifer.com/5ngg.gif',
        'https://i.gifer.com/Yp9v.gif',
        'https://i.gifer.com/27tM.gif',
        'https://i.gifer.com/Wjrj.gif',
        'https://i.gifer.com/WJOQ.gif',
        'https://i.gifer.com/aw.gif',
        'https://i.gifer.com/79o1.gif',
        'https://i.gifer.com/27tE.gif',
        'https://i.gifer.com/5w5p.gif',
        'https://i.gifer.com/Dbk.gif',
        'https://i.gifer.com/Bvr.gif',
        'https://i.gifer.com/B7bp.gif',
        'https://i.gifer.com/ZMzD.gif',
        'https://i.gifer.com/79oD.gif',
        'https://i.gifer.com/9qBp.gif',
        'https://i.gifer.com/OPY.gif'
    ];

    var rand = list[Math.floor(Math.random() * list.length)];
    let user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!user) {
        return message.reply('Quem você quer abraçar?');
    }
    let avatar = message.author.displayAvatarURL({ format: 'png' });
    const embed = new Discord.MessageEmbed()
        .setTitle('Um abraço quentinho')
        .setColor('#DFA00F')
        .setDescription(`${message.author} abraçou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Eu não entendo pra que serve um abraço')
        .setAuthor(message.author.tag, avatar);
    await message.channel.send(embed);
}