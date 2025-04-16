const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ayuda')
    .setDescription('Muestra los comandos disponibles'),
  async execute(interaction) {
    await interaction.reply(`
📖 Comandos disponibles:
- /crear_evento
- /eliminar_evento
- /listar_eventos
- /notificar
- /ayuda
    `);
  }
};
