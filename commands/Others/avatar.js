const Discord = require('discord.js');
const logger = require('../../winston');

module.exports = {
	name: 'avatar',
	description: 'Get mentioned users avatar',
	aliases: [],
	guildOnly: true,
	argRequired: false,
	usage: '[mention]',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const member = message.mentions.members.first();
		if(!member) {
			const avatarURL = message.author.displayAvatarURL({ size: 512, dynamic: true }).replace('.webp', '.png');
			const attachment = new Discord.MessageAttachment(avatarURL, `avatar.${avatarURL.split('.').pop().split('?')[0]}`);
			message.channel.send(attachment);

			return logger.info(`Fetch ${message.author.id} avatar success`);
		}
		const avatarURL = member.user.displayAvatarURL({ size: 512, dynamic: true }).replace('.webp', '.png');
		const attachment = new Discord.MessageAttachment(avatarURL, `avatar.${avatarURL.split('.').pop().split('?')[0]}`);
		message.channel.send(attachment);

		logger.info(`Fetch ${member.user.id} avatar success`);

	},
};

