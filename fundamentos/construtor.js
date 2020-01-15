function Carro(velocidadeMax=200,delta=5){
    let velocidadeAtual=0

    this.acelarar = _ => velocidadeAtual>=velocidadeMax  ? velocidadeAtual=200 : velocidadeAtual+=delta

    this.velocidade = _ => velocidadeAtual


}

const uno = new Carro()
uno.acelarar()
console.log(uno.velocidade())
uno.acelarar()
console.log(uno.velocidade())

// factory
function criarPessoa(nome,idade){
    return {
        nome,
        idade
    }
}
let p1= new criarPessoa('joao',22)
console.log(p1)

class Pessoa {
    constructor (nome){
        this.nome=nome
    }
    falar = a => console.log('oi, eu sou o '+this.nome)
}
let p2 = new Pessoa('jp')
p2.falar()

function Pessoa1(nome) {
    this.nome=nome
    this.falar = a => console.log('oi, eu sou ooo '+nome)
}
let p3 = new Pessoa1('jp')
p3.falar()