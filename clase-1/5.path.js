const path = require('node:path')

console.log(path.sep())


// unir rutas

const filePath = path.join('content', 'subfolder', 'test.js')


const base = path.basename('tmp/pass.txt')
console.log(base)

const filename = path.basename('tmp/pass.txt', '.txt')
console.log(filename)


const extension = path.extname('image.jpg')
console.log(extension)