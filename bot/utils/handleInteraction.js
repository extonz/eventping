const fs = require('node:fs');
const path = require('node:path');

const commands = new Map();
const commandFiles = fs.readdirSync('./bot/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`../commands/${file}`);
  commands.set(command.data.name, command);
}

module.exports = {
  handleInteraction: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: '⚠️ Hubo un error al ejecutar el comando.', ephemeral: true });
    }
  }
};
