var readline = require('readline');
var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question('Entre com o salario minimo: ', (num1) => {
        ler.question('Entre com a quantidade em quilowatt: ', (num2) =>{
            var valor = parseFloat(num1/700);
            var vp = parseFloat(valor*num2);
            var vd = parseFloat(vp*0.9);
            console.log(`Preço do Quilowatt: ${valor}\nValor a ser pago: ${vp}\nValor com desconto: ${vd}\n`);
            ler.close();
        })
    })