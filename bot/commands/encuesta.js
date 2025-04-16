const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('encuesta')
    .setDescription('Crea una encuesta con reacciones')
    .addStringOption(option =>
      option.setName('pregunta')
        .setDescription('Pregunta de la encuesta')
        .setRequired(true)),
  async execute(interaction) {
    const pregunta = interaction.options.getString('pregunta');
    const message = await interaction.reply({ content: `📊 **Encuesta**: ${pregunta}`, fetchReply: true });
    await message.react('👍');
    await message.react('👎');
  }
};
