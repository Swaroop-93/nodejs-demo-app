const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <h1>Welcome to Node.js Demo App!</h1>
        <p>Deployed using GitHub Actions CI/CD Pipeline.</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
