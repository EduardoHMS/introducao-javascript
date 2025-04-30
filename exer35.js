var readline = require('readline');
var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question('Entre com nome: ', (nome) => {
        ler.question('Entre com endereco: ', (end) =>{
            ler.question('Entre com telefone: ', (tel)=>{
                console.log(`Nome: ${nome} \nEndereço: ${end}\nTelefone: ${tel}\n`);
                ler.close();
            }) 
        })
    })
