const discord = require('discord.js');
const {prefix, token, botver, uidTEST, uidKD} = require('./config.json'); //global constants
const {upvoteTEST, downvoteTEST, upvoteKD, downvoteKD} = require('./config-emoji.json'); //configure emojis ID's here
const bot = new discord.Client();
bot.login(process.env.token); //client login to discord server

//once bot is ready, it executes code below
bot.once('ready', () => {
    console.log(`connected, logged in as: \'${bot.user.tag}\'\n=============================================`);
    bot.user.setPresence({game: {name: `${prefix}, ver ${botver}` }});
});

//on every message sent, bot will filter them and try to react to messages starting with prefix
bot.on('message', message =>  {
    const messageInLowercase = message.content.toLowerCase();
    if (!message.content.includes(prefix) || message.channel.id !== uidTEST) {
        return null; //exits early if message don't start with #propozycje
    } else {
        message.react(upvoteTEST)
        .then(() => message.react(downvoteTEST))
        .then(() => console.log(`reacted to ${message.author.username}'s message (ID ${message.channel.id}\\${message.id}) with:\nupvote(${upvoteTEST})\ndownvote(${downvoteTEST})\n`));
    }
}); //jak coś to pisałem to na szybko, mogą być małe niedopatrzenia odnośnie tego, że bot będzie reagować na złe wiadomości
