const pessoa = {
    nome: 'Ana',
    idade:22,
    peso:50,
    endereco:{
        rua:'rua ABC',
        numero:145
    }
}
const {nome,idade}=pessoa //atribuição de forma mais facil

const {nome:n,idade:i}=pessoa

const {endereco: {rua:r ,numero: num} }=pessoa
console.log(r,num)

const[a] = [10]
console.log(a)
const [n1, ,n3]=[1,2,3]
console.log(n1,n3)


function rand ({min=0, max=1000}){
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}
const obj = {min: 10, max: 50}
console.log(rand({}))


