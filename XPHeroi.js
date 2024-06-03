const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, digite o nome de seu herói: ', (nome) => {
   rl.question('Agora digite o XP de seu herói para descobrir seu nível: ' , (xp) => {
        var nivel = '';
        var xpInt = parseInt(xp, 10);
        
        switch (true){
            case xpInt < 1001:
                nivel = 'Ferro';
            break;

            case xpInt < 2001:
                nivel = 'Bronze';
            break;

            case xpInt < 5001:
                nivel = 'Prata';
            break;

            case xpInt < 7001:
                nivel = 'Ouro';
            break;

            case xpInt < 8001:
                nivel = 'Platina';
            break;

            case xpInt < 9001:
                nivel = 'Acendente';
            break;

            case xpInt < 10001:
                nivel = 'Imortal';
            break;

            case xpInt > 10000:
                nivel = 'Radiante';
            break;

            default:
                nivel = 'rank inválido';
            break;
        }
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
        rl.close();
    }); 
});
