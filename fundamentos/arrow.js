
let dobro = num => 2*num;
console.log(dobro(5))

let ola = () => 'olá povo'
console.log(ola())
//callback
const fab = ['mercedes','audi', 'bmw']
function imprimir(nome,indice){
    console.log(`${indice+1}. ${nome}`)
}
fab.forEach(imprimir)
fab.forEach ( a => console.log(a))

const notas=[9.5,8.7,8.5,4.5,2.4]
let notasBaixa=[]
for ( i in notas){
    //if(notas[i]<6)notasBaixa.push(notas[i])
}
//usando callbabk
notasBaixa=notas.filter(nota => nota<7 )
console.log(notasBaixa)

