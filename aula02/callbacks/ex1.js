// EX1: Obter informações sobre carro
//modelo, marca, tipo

function obterCarro(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            modelo: uno 
        })
    }, 1000);
}

function obterMarca(idVeiculo, callback) {
    setTimeout(() => {
        return callback(null, {
            marca: fiat 
        })
    }, 2000);
}

function obterTipo(idVeiculo, callback) {
    setTimeout(() => {
        return callback(null, {
            tipo: hatch
        })
    }, 2000);
}