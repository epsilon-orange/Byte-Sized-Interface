const { SlashCommandBuilder } = require('discord.js');
const { alpha } = require('./alphabet.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cast')
		.setDescription('spell to cast')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('casting')
        ),
        
	async execute(interaction) {
        let answer = ''
        
        var str = interaction.options.getString('input').split('')
        
        for (var letter in str){
            str[letter] = alpha[str[letter]] || '?';
        }
        answer = str.join(' ');

        await interaction.reply(answer)
	},
};