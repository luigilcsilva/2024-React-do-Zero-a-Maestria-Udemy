/* ------------------------------------- */
/* PRIMEIRA DISCUSSÃO - var, let e const */
/* ------------------------------------- */

/* ------------------------------------- */
/* ------------ var e let -------------- */
/* ------------------------------------- */
/* Desse jeito aqui, com var, a variável x declarada dentro do bloco IF
   vai "manchar" a variável x fora do bloco IF.
*/
var x = 10
var y = 15

if(y>10) {
    var x = 5
    console.log(x) //Vai imprimir 5.
}

console.log(x) //Vai imprimir 5.

/* Desse jeito aqui, com let, a variável x declarada dentro do bloco IF
   só assume o valor 5 lá.
*/
let a = 10
let b = 15

if(b>10) {
    let a = 5
    console.log(a) //Vai imprimir 5.
}

console.log(a) //Vai imprimir 10.

/* Outro exemplo */
var j = 100

for (var j=0; j<5; j++) {
    console.log(j)
}

console.log(j) //Vai imprimir o valor 5. O valor 100 já era...


let i = 100

for (let i=0; i<5; i++) {
    console.log(i)
}

console.log(i) //Vai imprimir o valor 100. A variável do loop fica 
                //só dentro do loop.

/* ------------------------------------- */
/* -------------- const ---------------- */
/* ------------------------------------- */
function logName() {
    const name = 'Matheus'
    console.log(name)
}

const name = 'Pedro'

logName() //Retorna Matheus.

console.log(name) //Retorna Pedro.

//name = 'João' //ERRO: é proibido associar um novo valor a uma variável constante.