const  nums= [1,2,3,4,5]

let res=nums.map(n => n*2);

const soma= e => e+10;
const pot2 = e => e*e;

res= nums.map(soma).map(pot2);
console.log(res)

const carrinho = [
    '{"nome":"borracha","preco":3.45}',
    '{"nome":"Caderno","preco":11.45}',
    '{"nome":"kit de lapis","preco":5.45}',
    '{"nome":"Caneta","preco":0.45}',
]

const paraObj = json=> JSON.parse(json);
const apenasPreco = produto => produto.preco;
let resultado = carrinho.map(paraObj);
resultado = resultado.map(apenasPreco);
function somaPreco(array){
    let total=0;
    array.forEach(element => {
        total+=element;
    });
    return total;
}
console.log(resultado)
console.log(somaPreco(resultado));