const { Router } = require('express');
const { cepInfo, freteInfo } = require('../controller/logisticController')

const routes = Router();

routes.get(`/endereco/cep=:cep`, cepInfo);
routes.get(`/frete/cep=:cep`, freteInfo);

module.exports = routes;