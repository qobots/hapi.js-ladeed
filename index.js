"use strict"

const Hapi = require("@hapi/hapi")

const init = async () => {

    const server = Hapi.server({
        host: 'localhost',
        port: 3000
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: (req, reply) => {

            return {
                "message": "hi there"
            }
        }
    })

    server.route({
        method: 'POST',
        path: '/',
        handler: (req, reply) => {

            return {
                "username": req.payload.userName,
                "date": new Date()

            }
        }
    })

    await server.start()
    console.log(`server listening on post:${server.info.uri} `)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()