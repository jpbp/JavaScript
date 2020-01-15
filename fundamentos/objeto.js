

function Carro (nome,modelo){
    this.nome=nome;
    this.modelo=modelo;
}
const car1 = new Carro('gol','G5');

function Produto(nome,preco,desconto){
    this.nome=nome;
    this.preco=preco;
    this.desconto=desconto;
    this.getPrecoDesconto = () => (preco*desconto)/100;
    this.setNome = nomeAuz => this.nome=nomeAuz; 
}

const p1 = new Produto('cadeira',15000,50);
p1.setNome('cadeira de roda');
console.log(p1.getPrecoDesconto()); 


const pessoa = {nome: 'João'};
pessoa.nome='Pedro';
console.log(pessoa);

Object.freeze(pessoa); // não pode mais alterar o valor de nome
pessoa.nome='maria';

const sequencia= {
    _valor :1, // conversao
    get valor(){return this._valor++},
    set valor(val){this._valor=val} 
}


// funções importantes


const Pessoa = {
    nome:'jp',
    idade: 15,
    peso:60
}

Object.entries(Pessoa).forEach(p => {console.log(`${p[0]} , ${p[1]}`)})

Object.defineProperty(Pessoa,'DataNascimento',{ 
    enumerable: true, //pode ser percorrida
    writable: false, // poder sobreescrever 
    value:'01/01/20'
})
console.log(Pessoa.DataNascimento);

const dest = {a:1}
