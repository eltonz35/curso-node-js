/*
0-Obter um usuario
1-Obter o numero de telefone de um usuario a partir do seu Id
2-Obter o endereço do usuario pelo Id
 */
// importamos um módulo interno do node.js
const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

//setTimeout: função que retorna um valor, depois de determinado período de tempo.
function obterUsuario() {
    // quando der algum  problema => reject(ERRO)
    // quando sucess => resolve
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromisse(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: "11990002",
                ddd: 11
            })
        }, 2000);
    }) 
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "dos bobos",
            numero: 0
        })
    }, 2000)
}

const usuarioPromisse = obterUsuario();
// para manipular o sucesso, usamos a função .then
// para manipular o erro, usamos a função .catch
usuarioPromisse
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    }) 
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: ${resultado.telefone.ddd} ${resultado.telefone.telefone}
        `);
    })
    .catch(function (error) {
        console.error("Deu ruim", error);
    })
