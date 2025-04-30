var readline = require('readline');
var resp, suc, ant;
var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question("Entre com um numero:", function(answer){
    resp = answer;
    ler.close();
    suc = parseInt(resp)+1;
ant = resp - 1;
console.log(`O sucessor é: ${suc} \nO antecessor é: ${ant}\n`);
})
