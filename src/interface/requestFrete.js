const CEPLOJA = '13206765';

const bodyRequest = (cepDestino, cdServico = '41106') => {
    return {
        'nCdServico': cdServico,
        'sCepOrigem': CEPLOJA,
        'sCepDestino': cepDestino,
        'nVlPeso': "1",
        'nCdFormato': 1,
        'nVlComprimento': 20,
        'nVlAltura': 20,
        'nVlLargura': 20,
        'nVlDiametro': 0,
        'sCdMaoPropria': "N",
        'nVlValorDeclarado': 0,
        'sCdAvisoRecebimento': "N",
        'StrRetorno': "xml",
        'nIndicaCalculo': 3
    }
}

module.exports = bodyRequest;