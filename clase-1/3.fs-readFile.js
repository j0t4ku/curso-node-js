const fs = require('node:fs')

console.log('Leyendo el primer archivo')
const text = fs.readFile('./archivo.txt', 'utf-8')

console.log(text)

console.log('Leyendo el segundo archivo')
const text2 = fs.readFile('./archivo2.txt', 'utf-8')

console.log(text2)
