/* ------------------------------------- */
/* SEGUNDA DISCUSSÃO - ARROW FUNCTIONS */
/* ------------------------------------- */

/* ------------------------------------- */
//Aqui, vamos atribuir a função a uma constante só para ficar parecido com a arrow function.
const sum = function sum  (a,b) {
    return a + b
}

//Arrow function para várias linhas:
//const arrowSum = (a, b) => {
//    return a + b
//} 

//Arrow function para uma linha só:
const arrowSum = (a, b) => a + b 

console.log(sum(5,5))
console.log(arrowSum(5,5))

//Outro exemplo:
const greeting = (name) => {
    if(name) {
        return "Olá " + name + "!"
    } else {
        return "Olá!"
    }
}

console.log(greeting("Matheus"))
console.log(greeting())

//Outro exemplo:
const testeArrow = () => console.log('Testou!')

testeArrow()

/* ------------------------------------- */
//Aqui, vamos trabalhar com a questão do "this".
//PROBLEMA: dentro da function, o escopo do bloco é a window. Fora, é o user.
/*
const user = {
    name: "Theo",
    sayUserName() {
        setTimeout(function() { //O "pai" da função é Window. 
            console.log(this)
            console.log("Username: " + this.name)
        }, 500)
    }
}
*/
// SOLUÇÃO ANTIGA:
const user = {  //OBJETO.
    name: "Theo", // NOME DO OBJETO.
    sayUserName() { // MÉTODO.
        var self = this  //Bind -- Forçamos o vínculo
        setTimeout(function() { //O "pai" da função é Window. 
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700)
    },
}

user.sayUserName()
user.sayUserNameArrow()