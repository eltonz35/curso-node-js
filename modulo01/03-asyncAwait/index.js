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

//1º passo - Adicionar a palavra async -> automaticamente ela retornará uma promise
main()
async function main() {
    try {
        console.time("medida-promise")
        const usuario = await obterUsuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereço: ${endereco.rua}, ${endereco.numero}
        `);
        console.timeEnd("medida-promise")
    } catch (error) {
        console.error("Deu Ruim", error);
    }
}