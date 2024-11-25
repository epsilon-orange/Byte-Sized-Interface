const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hack')
		.setDescription('Toolkit commands')
        .addStringOption(option => 
            option.setName('action')
            .setDescription('what action would you like to take')
            .addChoices(
                { name: 'Break', value: 'Attempting to break into the module'},
                { name: 'Password', value: 'Attempting to input password'},
                { name: 'Read', value: 'Attempting to read data'},
                { name: 'Control', value: 'Attempting to take control of module'}
            )),
                              
	async execute(interaction) {
        var str = interaction.options.getString('action')

        await interaction.reply(str)
	},
};