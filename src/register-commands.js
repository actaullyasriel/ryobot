require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'addpanel',
        description: 'add a panel to the list',
        options: [
            {
                name: 'time',
                description: 'time of the panel you want to announce',
                type: ApplicationCommandOptionType.Number, 
                required: true,
            },
            {
                name: 'about',
                description: 'what the panel is about',
                type: ApplicationCommandOptionType.Number, 
                required: true
            },
        ]
    },
    {
        name: 'ping',
        description: 'check the ping of the bot',
    },
    {
        name: 'info',
        description: 'information about ryobot',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('turning on slash commands or whatever...')

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('slash commands on NIGGA')
    } catch (error) {
        console.log(`nigga there a fucking bug wtf did u do cuh ${error}`)
    }
})();