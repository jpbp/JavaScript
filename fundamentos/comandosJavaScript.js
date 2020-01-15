
const peso1=1.1;
const peso2= Number('2.0'); // casting 
console.log(peso1,peso2);

console.log(Number.isInteger(peso1)); // verifica se a var é  inteiro

const av= 1.45984545
console.log(av.toFixed(2)); //arrendodamento 
console.log(av.toString(2)); // converte para string , se passar 2 no to string ele converte para binario

// cuidados javaScript

console.log(7/0); // tipo infinity
console.log("10"/2); // kkkk
console.log(0.1+0.7);

//math

const raio=5.6;
const area=Math.PI * Math.pow(raio,2);
console.log(area);

// string 

const escola = "cod3r";

console.log(escola.charAt()); // retorna o valor no indice
console.log(escola.substring(1)); // retorna a sub string apartir do indice
console.log(escola.substring(0,3));
const nome='Ana';

const templete = `
    Olá
    ${nome}!`
console.log(templete);

console.log(`1+1 = ${1+1}`);

const up = texto=> texto.toUpperCase(); //trocar o nome das funções
console.log(`Ei... ${up('cuidado')}`);

// tipo boolean

let isActive= false;
console.log(isActive);
console.log(!isActive);
isActive=1;
console.log(!!isActive);
console.log(!!3);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);


//array 

const valores = [7.7,7.8,7.5,7.1];

console.log(valores[5]);



// objetos 

const prod1 = {};
prod1.nome='Celular foda'; // nome criado dinaminacamente
prod1.preco=4555.0;
console.log( typeof prod1);

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,

}

const aux = {nome: 'teste' };
const bx=aux;
bx.preco=1;
console.log(aux);
let c = 3;
let d = c;
d++;
console.log(d);

// function 
class Produto {};
console.log(typeof Produto);

// funções 

function imprimirSoma(a,b){
    console.log(a+b);
}

imprimirSoma(5,7);

const soma= function(a,b){
    console.log(a+b);
}

const soma1 = (a,b) =>{
    return a+b;
} 

const sub = (a,b) => a-b;

{{{{var sera="sera"}}}}
console.log(sera);


function teste(){
    var local=123;
}



let num = 2 // var tem escoplo global 
{
    let num = 1 
    console.log(num);
} 
console.log(num);
const func=[]
for (let i=0; i<10; i++){
    func.push(function(){
        console.log(i)
    }
    )
}
func[2]()

// hoisting

console.log('a',kk)
var kk = 
console.log('a',kk)


