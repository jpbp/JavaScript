function fun1(a,b) {
    return a+b
}

//armazenar em uma variavel
const fun2 = function (){
    console.log("oi")
}

// em um array

const array = [fun1,fun2] 

const obj = {
    nome: 'joao',
    idade:19,
    peso:62,
    getPeso:function (){return this.peso},
    getIdade:function() {return this.idade},
    a: function (){return this.peso*this.idade}
}
console.log(obj.a())

//retornando função 

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(1,2)(5)

// funcao com ou sem argumeno
function soma1(){
    let soma=0;
    for (i in arguments){
        soma+=arguments[i]
    }
    return soma
}
console.log(soma1(5,1,2,2))

const pessoa ={
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
const falar= pessoa.falar.bind(pessoa)
falar()
