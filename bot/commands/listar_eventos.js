const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('listar_eventos')
    .setDescription('Lista todos los eventos programados'),
  async execute(interaction) {
    await interaction.reply(`📋 Lista de eventos:
- Fiesta en el canal general
- Torneo de Minecraft el viernes`);
  }
};
