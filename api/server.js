const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({ port: 7000 })

server.route([
  {
    method: 'get',
    path: '/',
    handler(request, reply) {
      reply({ success: true })
    }
  }
])

server.start()
