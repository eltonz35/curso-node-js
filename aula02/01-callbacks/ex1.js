// EX1: Obter informações sobre carro
//modelo, marca, tipo

function obterCarro(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            modelo: "uno" 
        })
    }, 1000);
}

function obterMarca(idVeiculo, callback) {
    setTimeout(() => {
        return callback(null, {
            marca: "fiat" 
        })
    }, 2000);
}

function obterTipo(idVeiculo, callback) {
    setTimeout(() => {
        return callback(null, {
            tipo: "hatch"
        })
    }, 2000);
}

//Calbacks

obterCarro(function resolverCarro(error, veiculo) {
    if(error) {
        console.error("Erro no modelo do veículo!", error);
        return;
    }
    obterMarca(veiculo.id ,function resolverMarca(error1, marca) {
        if(error1) {
            console.error("Erro na marca do veículo!", error1);
            return;
        }
        obterTipo(veiculo.id ,function resolverTipo(error2, tipo) {
            if(error2) {
                console.error("Erro no tipo do veículo!", error2);
                return;
            }

            console.log(`
            Modelo: ${veiculo.modelo}
            Marca:  ${marca.marca}
            Tipo:   ${tipo.tipo} 
            `);
        })
    })
})