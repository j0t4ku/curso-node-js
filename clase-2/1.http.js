const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('Bienvenido a mi pagina Web')
  } else if (req.url === '/imagen.jpg') {
    fs.readFile('./imagen.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('500 Internal Server Error')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/contact') {
    res.statusCode = 200
    res.end('Contacto')
  } else {
    res.statusCode = 404
    res.end('404')
  }
}
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http:localhost:${desiredPort}`)
})
