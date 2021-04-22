const Discord = require('discord.js')
const client = new Discord.Client()
const comando = require('./gerenciador-de-cmd')
const config = require('./config.json')

client.on('ready', () => {
    console.log('embed ok')
})
comando(client, ['embed', 'ebd'], (message) => { //0 ['embed', 'edb'] é para o bot pelo os dois "tipos" de comando
    let embed = new Discord.MessageEmbed()
    .setTitle('jao lindão') //Um titulo pra sua embed
    .setDescription('<3') //Coloque uma descrição na sua embed
    .setImage(message.author.displayAvatarURL({size: 4096, dynamic: true}))
    .setFooter('a embed ai') //isso é aqueles textos pequenos
    .setColor('#18F5F5') //é aquela barrinha colorida, procure cores no Google Color Picker

    message.reply(embed) //pra responder o comando com uma embed
})
comando(client, ['embed2','ebd2'], (message) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('um segundo tipo de embed')
    .setThumbnail(message.author.displayAvatarURL({size: 4096, dynamic: true})) //isso é aquelas "capas"
    .addField('blablabla', `${message.author.username}`) //não sei como explicar o ".addField"
    .addField('número aleatório:', `${Math.floor(Math.random() * 100) + 1}`)
    .setColor('#7F18F5')
    .setTimestamp() //a hora de quando tu fez o comando
    .setFooter('sla')

    message.reply('não sei o que dizer')
    //vai responder o comando e em seguida vai mandar o embed *recomendo baixar o inline reply pelo terminal usando: npm i monbrey/discord.js#inline-replies
    message.channel.send(embed)
})
comando(client, 'bot', (message) => {
    message.reply('Olá')
})


client.login(config.token)





