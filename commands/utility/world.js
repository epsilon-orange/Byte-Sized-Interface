const { SlashCommandBuilder } = require('discord.js');
const { country } = require('./countries.json');

module.exports = {
        data: new SlashCommandBuilder()
	.setName('country')
	.setDescription('gives rundown on important info')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('country to search')
        ),

	
	async execute(interaction) {
                var str = interaction.options.getString('input')
        
                await interaction.reply(`
                Name: ${str}
                Form of Government: ${country[str].formofgovernment} 
                Capital City: ${country[str].capitalcity}
                Head of State: ${country[str].headofgovernment}`)
                },
};