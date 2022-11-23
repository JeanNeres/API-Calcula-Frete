const axios = require('axios');
const bodyRequest = require('../interface/requestFrete');

const customError = (message, status) => ({ message, status });

const consultaCEP = async (cep) => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (!response.data) {
        throw customError('CEP inválido', 400)
    }

    return response.data;
}

const requestApiCorreios = async (cep) => {
    const continueUrl = bodyRequest(cep);

    const response = await axios.get('http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?' + new URLSearchParams(continueUrl).toString());

    return response.data;
}

const infoEndereco = async (cep) => {
    const endereco = await consultaCEP(cep);

    return endereco;
}

const prazoEntrega = async (cep) => {
    const xmlCorreios = await requestApiCorreios(cep);
    const prazoEntrega = await xmlCorreios.match(/<PrazoEntrega>(.+)<\/PrazoEntrega>/);

    if (prazoEntrega[1] === '0') {
        throw customError('CEP inválido', 400)
    }

    return prazoEntrega[1];
}

const valorEntrega = async (cep) => {
    const xmlCorreios = await requestApiCorreios(cep);
    const valorEntrega = await xmlCorreios.match(/<Valor>(.+)<\/Valor>/);

    if (valorEntrega[1] === '0') {
        throw customError('CEP inválido', 400)
    }

    return valorEntrega[1];
}

module.exports = { infoEndereco, prazoEntrega, valorEntrega };


