const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('crear_evento')
    .setDescription('Crea un evento en el servidor')
    .addStringOption(option =>
      option.setName('nombre')
        .setDescription('Nombre del evento')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('fecha')
        .setDescription('Fecha y hora del evento')
        .setRequired(true)),
  async execute(interaction) {
    const nombre = interaction.options.getString('nombre');
    const fecha = interaction.options.getString('fecha');

    await interaction.reply(`📅 Evento creado: **${nombre}** a las **${fecha}**.`);
  }
};
