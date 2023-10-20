const os = require('node:os')

console.log('Informacio del sistema operativo')
console.log('------------------')
console.log('Nombre del sistema: ', os.platform())
console.log('version', os.version())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('Uptime', os.uptime())
