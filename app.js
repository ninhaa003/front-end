const { OAuth2Client } = require('google-auth-library');
const express = require('express');
const app = express();

const CLIENT_ID = '159249793259-r0imskaj1kj3aaulhheov294vb4iga8q.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

async function verifyToken(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
}

async function authenticate(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).send('Token de acesso ausente');
        }
        const payload = await verifyToken(token);
        req.user = payload;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).send('Token inválido');
    }
}

app.get('/protected', authenticate, (req, res) => {
    res.send(`Você acessou um recurso protegido, ${req.user.name}! Seu email é ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

