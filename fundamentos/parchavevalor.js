const saudacao="opa"
function exec(){
    const saudacao='falaaa'
    return saudacao
}
console.log(saudacao,exec())

const Cliente = {
    nome:'Pedro',
    idade: 32,
    peso:60
}

console.log(Cliente)

function Obj(nome){
    this.nome=nome
    this.exec=exec()
}
const obj1= new Obj('mesa')
console.log(obj1)