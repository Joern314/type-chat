import * as https from 'https';
import * as fs from 'fs';

const readFile = fs.promises.readFile;

async function startServer() {
    const [key, cert] = await Promise.all([
        readFile('private/key.pem'),
        readFile('private/certificate.pem')
    ]);
    const server = https.createServer({ key, cert }, (req, res) => {
        res.statusCode = 200;
        res.end('hello world');
    })

    server.listen(8000, () => {
        console.log('Server started');
    });
}

startServer();