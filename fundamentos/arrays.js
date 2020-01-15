let aprovados = new Array('Bia','Carlos','Ana');
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana'];
aprovados[3]='joao'
aprovados.push('Abia')
aprovados[9]='marco'
aprovados.sort() //ordena
aprovados.pop('Bia');
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,2,'1','5') // exclui ou remove 
console.log('aqui',aprovados)
//filter
const produto =[
    {nome: 'Notebook',preco:2554, fragil: true},
    {nome: 'Ipad Pro',preco:4199, fragil: true},
    {nome: 'Copo de vidro',preco:12.45, fragil: true},
    {nome: 'copo de metal',preco:25.41, fragil: false}
]


console.log(produto.filter(function(p){
    return p.preco>2000;
}))

const caro = produto => produto.preco>=500
const fragil = produto => produto.fragil

const soma = (produto,s) => s+=produto.preco  

function somaPreco (p){
    let precoTotal=0
    p.forEach(element => {
        precoTotal+=element.preco   
    });
    return precoTotal
}

console.log(produto.filter(caro))