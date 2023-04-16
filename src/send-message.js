require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const roles = [
    {
        id: '1094738617114562581',
        label: 'option one'
    },
    {
        id: '1094738638123843727',
        label: 'option two'
    },
    {
        id: '1094738655697961101',
        label: 'option three'
    },
]

client.on('ready', async (c) => {
    try {
        const channel = await client.channels.cache.get('1094153842997870683');
        if (!channel) return;

        const row = new ActionRowBuilder();

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder()
                .setCustomId(role.id)
                .setLabel(role.label)
                .setStyle(ButtonStyle.Primary)
            );
        });

        await channel.send({
            content: 'claim your roles.',
            components: [row]
        });
        process.exit();
    } catch (error) {
        console.log(error);
    }
});