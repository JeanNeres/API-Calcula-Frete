const express = require('express');
const freteRoutes = require('./routes/freteRoutes')

const port = 3030;

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(freteRoutes);

server.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));

