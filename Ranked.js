/* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas) */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quantas vitórias você teve? ", (vitorias) => {
    rl.question("Quantas derrotas você teve? ", (derrotas) => {
        calculadoraDeRanque(vitorias, derrotas);
    rl.close();
    });
});

function calculadoraDeRanque(vitorias, derrotas){
    let saldoVitorias = (vitorias - derrotas);
    let nivel = '';
    switch (true){
        case saldoVitorias < 11:
            nivel = 'Ferro';
        break;
        
        case saldoVitorias < 21:
            nivel = 'Bronze';
        break;
        
        case saldoVitorias < 51:
            nivel = 'Prata';
        break;
        
        case saldoVitorias < 81:
            nivel = 'Ouro';
        break;
        
        case saldoVitorias < 91:
            nivel = 'Diamante';
        break;

        case saldoVitorias < 101:
            nivel = 'Lendário';
        break;

        case saldoVitorias >= 101:
            nivel = 'Imortal';
        break;
    }
    
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

