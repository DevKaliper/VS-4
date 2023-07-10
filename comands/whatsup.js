const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("Sup")
    .setDescription("Replies with Whats up ma nigga"),
  async execute(interaction) {
    await interaction.reply("Whats up ma nigga");
  },
};
