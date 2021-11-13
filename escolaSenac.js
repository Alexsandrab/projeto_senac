var alunos = [];
var nota = [];
var somaNota = 0;
var aprovados =[];
var reprovados = [];
var menor = 10;
var maior = 0;
//var media = 0;

const input = require("readline-sync");

var colegio = input.question("Digite o nome do colégio: ");
const quantAlunos = Number(input.question("Digite a quantidade de alunos: "));


for (var i = 1; i <=quantAlunos; i++){
     var nome = input.question("Digite o nome do aluno " + i + ":" );
     var nota1 = Number(input.question("Digite a nota do aluno " + i + ":" ));
     alunos.push(nome);
     nota.push(nota1);
     somaNota += nota1;


    if (nota1>=7){
        aprovados.push(nome);
    }else{
        reprovados.push(nome);
    }
    if (nota1>maior){
        maior = nota1;
    }
    if (nota1<menor){
        menor = nota1;
    }
}

console.log("=================================================================");
console.log("      BOLETIM ESCOLAR - " + colegio.toUpperCase());
console.log("==================================================================");
console.log("A soma das notas de todos os alunos é de " + somaNota);
console.log("Maior nota: " + maior);
console.log("Menor nota: " + menor);
console.log("Alunos aprovados: " + aprovados);
console.log("Alunos reprovados: " + reprovados);
console.log("A média da turma é de " + somaNota/quantAlunos);
console.log(alunos);
console.log(nota);