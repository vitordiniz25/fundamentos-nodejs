import http from 'node:http';

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users'){
        users.push({
            id:1,
            name: 'Fulano de tal',
            email: 'fulanodetal@gmail.com',
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end('Not found')
})

server.listen(3333)

//localhost:3333