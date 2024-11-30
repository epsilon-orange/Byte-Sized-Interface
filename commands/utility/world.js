const { SlashCommandBuilder } = require('discord.js');
const { country } = require('./countries.json');

module.exports = {
        data: new SlashCommandBuilder()
	.setName('country-name')
	.setDescription('proves information about specified country')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('country to search')
        ),

	
	async execute(interaction) {

        var str = interaction.options.getString('input').toLowerCase()
        await interaction.reply(`
        Name: ${country[str].name}
        Form of Government: ${country[str].formofgovernment} 
        Capital City: ${country[str].capitalcity}
        Head of Government: ${country[str].headofgovernment}`)
                 
        }
                
};