import http from "http"

const server = http.createServer((request, response) => {
    console.log(request.method, request.url)
    const content = { "content-type": "text/plain; charset=utf-8" }

    if (request.url == "/") {
        response.writeHead(200, content)
        response.end("Hello World")
    }

    else if (request.url == "/login") {
        response.writeHead(200, content)
        response.end("Está na rota de login")
    }

    else if (request.url == "/register") {
        response.writeHead(200, content)
        response.end("Está na rota de registro")
    }
    else {
        response.writeHead(404, content)
        response.end("Nâo existe essa rota!")
    }
})

server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`)
})