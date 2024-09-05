const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(num) {
    if (num < 0) return false;

    let a = 0, b = 1, c = 0;

    if (num === 0 || num === 1) return true;

    while (c < num) {
        c = a + b;
        a = b;
        b = c;
    }

    return c === num;
}

function checkFibonacci(num) {
    if (isFibonacci(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}

rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", (input) => {
    const num = parseInt(input);
    checkFibonacci(num);
    rl.close();
});
