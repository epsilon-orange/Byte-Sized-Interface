const { SlashCommandBuilder } = require('discord.js');
const { id } = require('./contacts.json');

module.exports = {
        data: new SlashCommandBuilder()
	.setName('dm')
	.setDescription('sends message to another interface')
        .addStringOption(option =>
            option.setName('interface')
                .setDescription('who are you sending it to?'))
        .addStringOption(option =>
            option.setName('content')
                .setDescription('what do you want to say?')),
	
	async execute(interaction) {
    
        interaction.guild.channels.cache.get(id[interaction.options.getString('interface')]).send(interaction.options.getString('content'))

        await interaction.reply("Message Sent")
        
    },
};