## Type-Chat

A simple chat written in TypeScript.

Consists of three parts:

- Server: `src/server/main.ts`
- Client-to-server communication: `src/client/comm.ts`
- Client Frontend: `src/client/main.ts`

### Create SSL Certificates

```console
cd 
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out certificate.pem -days 365 -nodes
```

