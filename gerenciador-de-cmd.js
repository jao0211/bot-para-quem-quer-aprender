const prefixo = '!' 
//Você pode mudar o prefixo para um de sua preferência

module.exports = (client, aliases, callback) => {
   if (typeof aliases === 'string') {
       aliases = [aliases]
   }
    
    client.on('message', message => {
        const { content } = message

        aliases.forEach(alias => {
            const comando = `${prefixo}${alias}`

            if (content.startsWith(`${comando} `) || content === comando) {
                callback(message)

            }
        })
    })
}