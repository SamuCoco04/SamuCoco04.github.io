import { preview } from 'vite'

const server = await preview({
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
  },
})

console.log('Local preview ready at http://127.0.0.1:4173/')

let idleTimer
const closeAfterIdle = () => {
  clearTimeout(idleTimer)
  idleTimer = setTimeout(async () => {
    await server.close()
    process.exit(0)
  }, 30_000)
}

server.httpServer?.on('request', closeAfterIdle)
closeAfterIdle()
