function tratarErro(erro){
    throw new Error('deu ruim')
}

function objeto(obj){
    try{
        console.log(obj.nome)
    }
    catch(e){
        tratarErro(e)
    }
}

const obj = {nome: 'Jp'}
objeto(obj.nome)