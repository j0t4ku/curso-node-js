const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo')
fs.readFileSync('./archivo.txt', 'utf-8')
    .then(text => console.log(text))


console.log('Tiempo de espera')

console.log('Leyendo el segundo archivo')
fs.readFileSync('./archivo2.txt', 'utf-8')
    .then(text => console.log(text))