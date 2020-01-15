console.log('1'==1) //comparando valor, não o tipo
console.log('1'===1) //comparando tipo
console.log(3!='3') 
console.log(3!=='3')

const resultado = (nota,idade) => nota >=7 && idade>18 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7,15))