// index.js - Punto de entrada del bot EventPing
require('dotenv').config();
const { Client, GatewayIntentBits, Events } = require('discord.js');
const { registerCommands } = require('./utils/registerCommands');
const { handleInteraction } = require('./utils/handleInteraction');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, () => {
    console.log(`✅ Bot iniciado como ${client.user.tag}`);
});

client.on(Events.InteractionCreate, handleInteraction);

registerCommands();

client.login(process.env.DISCORD_TOKEN);
