// Crie uma função que reverte uma sentença e utiliza uma função callback para devolver à função
// chamadora um texto específico. O texto deve ser "A INVERSÃO DA SENTENÇA RESULTOU
// EM" concatenado com o resultado obtido, tudo em letras maiúsculas. A função chamadora será
// responsável por exibir o resultado no console.

function reverteSentenca(texto:string, callback: (param:string) => any) : void {
    texto = texto.split('').reverse().join('').toUpperCase();
    callback(texto);
}

function imprimirTextoInvertido(textoInvertido:string) : void {
    console.log("A INVERSÃO DA SENTENÇA RESULTOU EM: " + textoInvertido);
}


// reverteSentenca("texto a ser invertido", imprimirTextoInvertido);

// Escreva um programa que realize uma contagem. O programa deve exibir a contagem, imprimindo
// um número em cada segundo, e então quando completar 10 segundos o programa deve interromper
// a contagem informando a ação em uma mensagem. Para o exercício utilize as funções aprendidas
// nessa aula.

let contador:number = 0;
let contadorInterval = setInterval(() => {
    contador++;
    console.log("Tempo: " + contador);
    if(contador == 10) {
        clearInterval(contadorInterval);
        console.log("Task finalizada!");
    }
}, 1000);
