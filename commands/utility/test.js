const { SlashCommandBuilder } = require('discord.js');
const { define } = require('./definitions.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('define')
		.setDescription('Explains the meaning of a word')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Term to define')
        ),

	async execute(interaction) {
        var str = interaction.options.getString('input')
        
        await interaction.reply(define[str])
	},
};