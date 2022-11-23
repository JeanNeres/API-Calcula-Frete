const { prazoEntrega, valorEntrega, infoEndereco } = require('../services/correiosServices');

const cepInfo = async (req, res) => {
    try {
        const cep = req.params.cep;
        const endereco = await infoEndereco(cep);

        res.end(JSON.stringify({ endereco }));

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const freteInfo = async (req, res) => {
    try {
        const cep = req.params.cep;

        const prazo = await prazoEntrega(cep);
        const frete = await valorEntrega(cep);

        res.end(JSON.stringify({ 'prazo entrega': `${prazo}`, 'valor frete': `${frete}` }));

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

module.exports = { cepInfo, freteInfo };