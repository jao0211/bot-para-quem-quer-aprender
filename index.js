const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

//   COLOQUE O TOKEN DO BOT NO CONFIG.JSON ENTRE AS ASPAS

var sla = require('./embed') //usei "var" pq é mais rapido

client.on('ready', () => {
    client.user.setActivity('Bot ONLINE', { type: 'PLAYING' }) //isso é o status do bot, "PLAYING" pra jogando
    console.log('Seu bot está ONLINE!!')
    //client.channels.cache.get('').send('Olá') //Você coloca o id de algum canal de texto ai quando o bot ficar online, ele vai mandar no canal de texto "Olá"
})

client.login(config.token) //o client (bot) vai fazer login e ficar online usando o token que está no config.json