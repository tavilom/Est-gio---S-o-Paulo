const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};


const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);


const percentualRepresentacao = Object.entries(faturamento).map(([estado, valor]) => {
    return {
        estado: estado,
        percentual: ((valor / totalFaturamento) * 100).toFixed(2) + '%'
    };
});


percentualRepresentacao.forEach(({ estado, percentual }) => {
    console.log(`Estado: ${estado}, Percentual: ${percentual}`);
});
