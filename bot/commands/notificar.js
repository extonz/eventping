const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('notificar')
    .setDescription('Envía una notificación a un rol sobre un evento')
    .addRoleOption(option =>
      option.setName('rol')
        .setDescription('Rol a notificar')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('mensaje')
        .setDescription('Mensaje de la notificación')
        .setRequired(true)),
  async execute(interaction) {
    const rol = interaction.options.getRole('rol');
    const mensaje = interaction.options.getString('mensaje');

    await interaction.reply(`📢 Notificación enviada a ${rol}: ${mensaje}`);
  }
};
