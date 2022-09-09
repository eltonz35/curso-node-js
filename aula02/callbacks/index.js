/*
0-Obter um usuario
1-Obter o numero de telefone de um usuario a partir do seu Id
2-Obter o endereço do usuario pelo Id
 */

//setTimeout: função que retorna um valor, depois de determinado período de tempo.
function obterUsuario(callback) {
    setTimeout(function(){
        return callback(null, {
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) { 
    setTimeout(() => {
        return callback(null, {
            telefone: "11990002",
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "dos bobos",
            numero: 0
        })
    }, 2000)
}

//Padrão de função Callback
function resolverUsuario(erro, usuario) {
    console.log("usuario", usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
    if(error) {
        console.error("ERRO no USUARIO", error);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1) {
            console.error("Deu ruim em TELEFONE", error1);
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2) {
                console.error("Deu ruim no ENDEREÇO", error2);
                return;
            }
            
            console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `);
        })
    })
})
