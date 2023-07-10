//  Require the necesary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, (c) => {
  console.log(` Ready! Logged in as ${c.user.tag}!`);
});

// Login to Discord with your client's token
client.login(token);

client.commands = new Collection();
