const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sugerencia')
    .setDescription('Envía una sugerencia para el servidor')
    .addStringOption(option =>
      option.setName('texto')
        .setDescription('Tu sugerencia')
        .setRequired(true)),
  async execute(interaction) {
    const texto = interaction.options.getString('texto');
    await interaction.reply(`💡 ¡Gracias por tu sugerencia! Has dicho: "${texto}"`);
  }
};
