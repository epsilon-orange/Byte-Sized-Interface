const { SlashCommandBuilder } = require('discord.js');
const { name } = require('./people.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('name')
		.setDescription('Detail all known information about this person')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Name to Search')
                .setRequired(true)),     
                              

	async execute(interaction) {
        var str = interaction.options.getString('input').toLowerCase()

        await interaction.reply(`
        Name: ${name[str].person}
        Role: ${name[str].role} 
        Pronouns: ${name[str].pronouns}
        Nationality: ${name[str].nationality}
        Age: ${name[str].age}`)
	},
};