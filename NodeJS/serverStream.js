import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        // Stream the file to the response
        const readStream = createReadStream('./test.txt');

        readStream.pipe(res);

        readStream.on('error', (err) => {
            console.error('Stream error:', err);
            res.writeHead(500);
            res.end('Internal Server Error');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
