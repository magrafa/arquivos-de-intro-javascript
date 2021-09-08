console.log("trab com condicoes");

const listaLugares = new Array(
    "salvador",
    "brasilia",
    `joao pessoa`,
    'natal',
);

listaLugares.push(`curitiba`)

console.log(`\n\nLista de lugares:`,listaLugares );

const idadeComprador = 18;
const acompanhada = false;
let temPassagemComprada = false;
const destino = "joao pessoa";
// tal coisa OU tal coisa = p || q = p ou q
// AND é representado pelo && e OR pelo ||

const podeComprar = idadeComprador >= 18 || acompanhada == true;

let contador = 0;

let destinoFinal = listaLugares[contador];
let destinoE = false;

for(i = 0; i < 5; i ++){
    if(listaLugares[i] == destino){
        console.log(`Destino `,listaLugares[i], ` ok\n\n`);
        destinoFinal == listaLugares[i];
        destinoE = true;
        break;
    }else{
        console.log(`Destino `,listaLugares[i], ` nao ok\n\n`);
    }
}
// while (contador <5){

//     if(listaLugares[contador] == destino){
//         console.log(`Destino `,listaLugares[contador], ` ok\n\n`);
//         destinoFinal == listaLugares[contador];
//         destinoE = true;
//         break;
//     }else{
//         console.log(`Destino `,listaLugares[contador], ` nao ok\n\n`);
        
//     }
//     contador += 1;
    
// }

console.log(`Destino final é:`,destinoFinal);
console.log(destinoE);
if (podeComprar && destinoE){
    console.log("Boa viagem");

}else{
    console.log("Erro");
}

