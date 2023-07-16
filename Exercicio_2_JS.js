let ptnome = prompt('Digite o Nome da primeira pessoa: ')
let ptsobrenome = prompt('Digite o Sobrenome da primeira pessoa')
let ptidade = prompt('Digite o Idade da primeira pessoa')
let ptestatura = prompt('Digite o Estatura da primeira pessoa')
let ptcor = prompt('Digite o Cor favorito da primeira pessoa')
let ptnome2 = prompt('Digite o Nome da segunda pessoa: ')
let ptsobrenome2 = prompt('Digite o Sobrenome da segunda pessoa')
let ptidade2 = prompt('Digite o Idade da segunda pessoa')
let ptestatura2 = prompt('Digite o Estatura da segunda pessoa')
let ptcor2 = prompt('Digite o Cor favorito da segunda pessoa')
Number(ptidade);
Number(ptestatura);
Number(ptidade2);
Number(ptestatura2);
if (ptidade > ptidade2) {
    console.log(`${ptnome} é mais velho/a que ${ptnome2}`)
} else {
    console.log(`${ptnome2} é mais velho/a que ${ptnome}`)
};
if (ptestatura > ptestatura2) {
    console.log(`${ptnome} é mais Alto/a que ${ptnome2}`)
} else {
    console.log(`${ptnome2} é mais Alto/a que ${ptnome}`)
};
console.log(`${ptnome} ${ptsobrenome} gosta do Cor ${ptcor} e ${ptnome2} ${ptsobrenome2} gosta de Cor ${ptcor2}`);
