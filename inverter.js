function inverterString(str) {
    let resultado = ''; 

    
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i]; 
    }

    return resultado; 
}


const stringPredefinida = "Essa string pré-definida será invertida, mas logo abaixo você poderá digitar uma e qualquer string para ser invertida também. Boa noite!";
console.log("String original:", stringPredefinida);
console.log("String invertida:", inverterString(stringPredefinida));


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a string a ser invertida: ', (input) => {
    console.log("String original:", input);
    console.log("String invertida:", inverterString(input));
    rl.close();
});
