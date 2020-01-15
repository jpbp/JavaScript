const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulher = funcionario => funcionario.genero==='F'
const china = funcionario => funcionario.pais==='China'  
const menorSalario = (func,funcAtual) => {return func.salario < funcAtual.salario ? func : funcAtual}
axios.get(url).then(response => {
    const funcionarios = response.data
     console.log(funcionarios
        .filter(mulher)
        .filter(china)
        .reduce(menorSalario))
})