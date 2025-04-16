const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('editar_evento')
    .setDescription('Edita la información de un evento')
    .addStringOption(option =>
      option.setName('nombre')
        .setDescription('Nombre del evento a editar')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('nuevo_nombre')
        .setDescription('Nuevo nombre del evento')
        .setRequired(false))
    .addStringOption(option =>
      option.setName('nueva_fecha')
        .setDescription('Nueva fecha del evento')
        .setRequired(false)),
  async execute(interaction) {
    const nombre = interaction.options.getString('nombre');
    const nuevoNombre = interaction.options.getString('nuevo_nombre');
    const nuevaFecha = interaction.options.getString('nueva_fecha');

    let mensaje = `✏️ Evento **${nombre}** editado: `;
    if (nuevoNombre) mensaje += `nuevo nombre: **${nuevoNombre}** `;
    if (nuevaFecha) mensaje += `nueva fecha: **${nuevaFecha}**`;
    
    await interaction.reply(mensaje);
  }
};
