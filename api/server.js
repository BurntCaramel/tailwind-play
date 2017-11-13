const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({ port: process.env.PORT || 7000 })

server.route([
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply({ success: true })
    }
  }
])

server.start()
