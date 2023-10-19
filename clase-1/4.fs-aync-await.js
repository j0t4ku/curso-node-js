const { readFileSync } = require('node:fs/promises')

    // IIFE
    ; (async () => {
        console.log('Leyendo el primer archivo')
        const text = readFileSync('./archivo.txt', 'utf-8')
        console.log(text)


        console.log('Tiempo de espera')

        console.log('Leyendo el segundo archivo')
        const text2 = readFileSync('./archivo2.txt', 'utf-8')
        console.log(text2)

    })()





