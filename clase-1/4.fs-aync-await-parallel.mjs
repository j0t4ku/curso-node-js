import { readFileSync } from 'node:fs/promises'

Promise.all([
  readFileSync('./archivo.txt', 'utf-8'),
  readFileSync('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
  console.log(text)
  console.log(text2)
})
