const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cuenta_regresiva')
    .setDescription('Crea una cuenta regresiva (simulada)')
    .addIntegerOption(option =>
      option.setName('segundos')
        .setDescription('Duración en segundos')
        .setRequired(true)),
  async execute(interaction) {
    const segundos = interaction.options.getInteger('segundos');
    await interaction.reply(`⏳ Iniciando cuenta regresiva de **${segundos}** segundos...`);

    setTimeout(() => {
      interaction.followUp('⏰ ¡Tiempo terminado!');
    }, segundos * 1000);
  }
};
