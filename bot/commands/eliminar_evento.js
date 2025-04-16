const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('eliminar_evento')
    .setDescription('Elimina un evento del servidor')
    .addStringOption(option =>
      option.setName('nombre')
        .setDescription('Nombre del evento a eliminar')
        .setRequired(true)),
  async execute(interaction) {
    const nombre = interaction.options.getString('nombre');
    await interaction.reply(`🗑️ Evento eliminado: **${nombre}**.`);
  }
};
