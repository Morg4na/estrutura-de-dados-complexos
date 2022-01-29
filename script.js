// Crie um objeto que receba ao menos três propriedades sobre você.
let perfil={
    nome:"maria clara",
    idade:16,
    altura:1.65
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
perfil.signo="aquário"

// Remova uma propriedade desse objeto.
delete perfil.altura

//Mostre no console todas as propriedades desse objeto.
console.log(perfil)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro=[{
    nome:"maria clara",
    idade:16,
    telefone:32999846019,
    amigos:["andressa","luken","morgana","amaterasu"]
},{
    nome:"matilde",
    idade:18,
    telefone:32999657847,
    amigos:["valesca","jujuba","bubby","alice"]
},{
    nome:"jorge",
    idade:38,
    telefone:32999895567,
    amigos:["jao","paulo","sallen","dracula"]
},{
    nome:"draken",
    idade:23,
    telefone:32999664323,
    amigos:["val","baji","mickey","kakashi"]
},{
    nome:"josé",
    idade:42,
    telefone:32999885567,
    amigos:["oracio","carlos","sebastiao","josefina"]
}]
// Mostre no console o nome de um amigo de cada lista.
for(let i=0;i<cadastro.length; i++){
    console.log(cadastro[i].amigos[1])
}