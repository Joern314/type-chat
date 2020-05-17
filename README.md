## Type-Chat

A simple chat written in TypeScript.

Consists of three parts:

- Server: `src/server/main.ts`
- Client-to-server communication: `src/client/comm.ts`
- Client Frontend: `src/client/main.ts`

### Instructions to Setup Development

Install requirements: `npm`, `openssl`

Clone the repository:
```console
git clone https://github.com/Joern314/type-chat.git
cd type-chat
```

Locally install devDependencies and dependencies: 
```console
npm install
```

Create a self-signed SSL certificate with `openssl`:
```console
openssl req -newkey rsa:4096 -x509 -days 365 -nodes -out private/certificate.pem -keyout private/key.pem -subj '/CN=localhost'
```

Compile the project 
```console
npm run build
```

Start the server
```console
npm start
```

Open `https://localhost:8000` with your browser.

### Configuration

- [ ] distinct development and production configurations
- [ ] use environment variables? use config files? (either way, not hardcoded filepaths)

Options:
- [ ] certificate paths
- [ ] server-ports
- [ ] use http instead of https (no certificates needed)

