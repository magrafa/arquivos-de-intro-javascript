console.log("trab com condicoes");

const listaLugares = new Array(
    "salvador",
    "brasilia",
    `joao pessoa`,
    'natal',
);

listaLugares.push(`curitiba`)

console.log(`\n\nLista de lugares:`,listaLugares );

const idadeComprador = 12;
const acompanhada = false;
const temPassagemComprada = true;
// tal coisa OU tal coisa = p || q = p ou q
// AND é representado pelo && e OR pelo ||
if (idadeComprador >= 18 || acompanhada == true) {
    console.log("\n\nDisponiveis: ",listaLugares,);
    console.log("\n\nAcesso livre para:  ", listaLugares );
}else {
    console.log("\n\nMenor de idade só pode comprar com adulto ");
    listaLugares.splice(1, 1);
    listaLugares.splice(1, 1);
    console.log(`\n\nLugares diponiveis para menor de idade: `, listaLugares);
    console.log("\n\nVoce nao esta com maior de idade ao lado ");
    console.log(listaLugares + " estao disponives para menores de 18");
}

// \n\n pula uma linha

console.log("\n\nEmbarque:");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");

}else{
    console.log("Você não pode embarcar");
}


