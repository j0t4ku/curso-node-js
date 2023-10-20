import { platform, version, arch, cpus, uptime } from 'node:os'

console.log('Informacio del sistema operativo')
console.log('------------------')
console.log('Nombre del sistema: ', platform())
console.log('version', version())
console.log('Arquitectura', arch())
console.log('CPUs', cpus())
console.log('Uptime', uptime())
