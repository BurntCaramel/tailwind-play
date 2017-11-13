const Hapi = require('hapi')
const Path = require('path')
const postcss = require('postcss')
const tailwind = require('tailwindcss')

const defaultTailwindConfigPath = Path.join(__dirname, 'tailwind.js')
//const defaultConfig = require('tailwindcss').defaultConfig()
//const defaultTailwindConfig = require('tailwindcss/defaultConfig')

const defaultCSS = `
@tailwind preflight;
@tailwind utilities;
`

function processCSS(css) {
  return postcss([tailwind(defaultTailwindConfigPath)])
  .process(css)
  .then(result => result.css)
}

const server = new Hapi.Server()

server.connection({ port: process.env.PORT || 7000 })

server.route([
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply({ success: true })
    }
  },
  {
    method: 'POST',
    path: '/process',
    handler(request, reply) {
      reply(
        processCSS(request.payload)
      )
      .type('text/css')
    }
  },
  {
    method: 'GET',
    path: '/default.css',
    handler(request, reply) {
      reply(
        processCSS(defaultCSS)
      )
      .type('text/css')
    }
  }
])

server.start()
